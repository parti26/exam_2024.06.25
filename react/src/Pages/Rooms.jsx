import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const getRooms = () => fetch("/api/rooms").then((res) => res.json());

export default function Rooms() {
  const query = useQuery({ queryKey: ["rooms"], queryFn: getRooms });

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h1>Rooms</h1>

      <article>
        {Array.isArray(query.data) &&
          query.data.map((room) => (
            <h2 key={room.id}>
              <Link to={`/rooms/${room.id}`}>{room.name}</Link>
            </h2>
          ))}
      </article>
    </main>
  );
}
