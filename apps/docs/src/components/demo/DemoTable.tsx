import React from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "../ui/Table";

const songs = [
  {
    name: "The Summoning",
    artist: "Sleep Token",
    album: "Take Me Back To Eden",
    duration: "6:36",
  },
  {
    name: "Hypnosis",
    artist: "Sleep Token",
    album: "This Place Will Become Your Tomb",
    duration: "5:36",
  },
  {
    name: "The Apparition",
    artist: "Sleep Token",
    album: "Take Me Back To Eden",
    duration: "4:28",
  },
  {
    name: "Vore",
    artist: "Sleep Token",
    album: "Take Me Back To Eden",
    duration: "5:40",
  },
  {
    name: "Granite",
    artist: "Sleep Token",
    album: "Take Me Back To Eden",
    duration: "3:45",
  },
  {
    name: "The Grey",
    artist: "Bad Omens",
    album: "Death Of Piece Of Mind",
    duration: "4:06",
  },
  {
    name: "Like A Villain",
    artist: "Bad Omens",
    album: "Death Of Piece Of Mind",
    duration: "3:31",
  },
  {
    name: "Sun//Eater",
    artist: "Lorna Shore",
    album: "Sun//Eater",
    duration: "6:10",
  },
];

const DemoTable = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <Table>
        <TableCaption>Absolute banger songs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="max-w-[150px]">Artist</TableHead>
            <TableHead>Album</TableHead>
            <TableHead className="text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {songs.map((song) => (
            <TableRow key={song.name}>
              <TableCell className="font-medium">{song.name}</TableCell>
              <TableCell>{song.artist}</TableCell>
              <TableCell>{song.album}</TableCell>
              <TableCell className="text-right">{song.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DemoTable;
