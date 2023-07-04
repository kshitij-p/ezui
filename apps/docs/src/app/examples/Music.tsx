import { Button } from "@/components/ui/Button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/Dialog";

import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/Menubar";
import { ScrollArea, ScrollBar } from "@/components/ui/ScrollArea";

import { Separator } from "@/components/ui/Separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { cn } from "@/lib/utils";
import { Globe, Grid, Library, ListMusic, Mic, Music2, PlayCircle, Podcast, Radio, User2 } from "lucide-react";
import Image from "next/image";

const MusicArtwork = ({
  song,
  className,
  aspectRatio = "portrait",
  ...rest
}: React.HTMLAttributes<HTMLDivElement> & {
  song: {
    name: string;
    artist: string;
    image: string;
  };
  aspectRatio?: "portrait" | "3/4";
}) => {
  return (
    <div {...rest} className={cn("group max-w-[250px] shrink-0 cursor-pointer space-y-3", className)} key={song.name}>
      <div className="overflow-hidden rounded-md">
        {/* Todo add a context menu here */}
        <Image
          className={cn(
            "h-auto w-auto scale-100 object-cover transition ease-in hover:scale-105",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
          )}
          width={364}
          height={366}
          src={song.image}
          alt={`Cover image of the song ${song.name} by ${song.artist}`}
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium">{song.name}</h3>
        <p className="text-xs text-light-text">{song.artist}</p>
      </div>
    </div>
  );
};

const Music = () => {
  return (
    <div>
      <Menubar className="rounded-bl-none rounded-br-none">
        <MenubarMenu>
          <MenubarTrigger>Music</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>About Music</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Preferences <MenubarShortcut className="ml-auto"></MenubarShortcut>⌘
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Hide Music... <MenubarShortcut className="ml-auto">⌘H</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Hide Others... <MenubarShortcut className="ml-auto">⇧⌘H</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Quit Music... <MenubarShortcut className="ml-auto">⌘L</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarSub>
              <MenubarSubTrigger>New</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>
                  Playlist <MenubarShortcut className="ml-auto">⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem disabled>
                  Playlist from selection <MenubarShortcut className="ml-auto">⇧⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>
                  Smart Playlist <MenubarShortcut className="ml-auto">⌥⌘N</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>Playlist Folder</MenubarItem>
                <MenubarItem disabled>Smort Playlist</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem>
              Open Stream URL <MenubarShortcut className="ml-auto">⌘U</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Close Window <MenubarShortcut className="ml-auto">⌘W</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Library</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Update Cloud Library</MenubarItem>
                <MenubarItem>Update Genius</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Organize Library</MenubarItem>
                <MenubarItem>Export Library</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Import Playlist</MenubarItem>
                <MenubarItem disabled>Import Playlist</MenubarItem>
                <MenubarItem>Show Duplicate Items</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Get Album Artwork</MenubarItem>
                <MenubarItem disabled>Get Track Names</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarItem>
              Import <MenubarShortcut className="ml-auto">⌘O</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>Burn Playlist to Disc</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Show in Finder <MenubarShortcut className="ml-auto">⇧⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>Convert</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Page Setup</MenubarItem>
            <MenubarItem disabled>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem disabled>
              Undo <MenubarShortcut className="ml-auto">⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>
              Redo <MenubarShortcut className="ml-auto">⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem disabled>
              Cut <MenubarShortcut className="ml-auto">⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>
              Copy <MenubarShortcut className="ml-auto">⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>
              Paste <MenubarShortcut className="ml-auto">⌘V</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Select All <MenubarShortcut className="ml-auto">⌘A</MenubarShortcut>
            </MenubarItem>
            <MenubarItem disabled>
              Dselect All <MenubarShortcut className="ml-auto">⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Smart Dictation{" "}
              <MenubarShortcut className="ml-auto">
                <Mic className="h-4 w-4" />
              </MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Emoji & Symbols{" "}
              <MenubarShortcut className="ml-auto">
                <Globe className="h-4 w-4" />
              </MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem>Show Playing Next</MenubarCheckboxItem>
            <MenubarCheckboxItem checked>Show Lyrics</MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarCheckboxItem disabled checked>
              Show Lyrics
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarCheckboxItem>Hide Sidebar</MenubarCheckboxItem>
            <MenubarCheckboxItem disabled>Enter Full Screen</MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Account</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem>Switch Account</MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarRadioGroup value="meowsalott">
              <MenubarRadioItem value="meowsers">Sir Meowsers</MenubarRadioItem>
              <MenubarRadioItem value="meowsalott">Meowsalott</MenubarRadioItem>
              <MenubarRadioItem value="elcatto">El Catto</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarCheckboxItem>Manage Family</MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarCheckboxItem>Add Account</MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <div className="grid lg:grid-cols-5">
        <div className="hidden lg:block">
          <div className="space-y-8 px-4 py-6 pb-20">
            {[
              {
                title: "Discover",
                scrollable: false,
                items: [
                  { text: "Listen Now", icon: PlayCircle, active: true },
                  { text: "Browse", icon: Grid },
                  { text: "Radio", icon: Radio },
                ],
              },
              {
                title: "Library",
                scrollable: false,
                items: [
                  { text: "Playlists", icon: ListMusic, active: false },
                  { text: "Songs", icon: Music2 },
                  { text: "Made for You", icon: User2 },
                  { text: "Artists", icon: Radio },
                  { text: "Albums", icon: Library },
                ],
              },
              {
                title: "Playlists",
                scrollable: true,
                items: [
                  { text: "Metal and Rock", icon: PlayCircle, active: false },
                  { text: "Pop Punk", icon: ListMusic },
                  { text: "Random", icon: ListMusic },
                  { text: "Recently Added", icon: ListMusic },
                  { text: "Top Songs", icon: ListMusic },
                  { text: "Top Artists", icon: ListMusic },
                  { text: "Top Albums", icon: ListMusic },
                  { text: "Take Me Back To Eden", icon: ListMusic },
                  { text: "Sleep Token Discography", icon: ListMusic },
                  { text: "Lorna Shore Discography", icon: ListMusic },
                  { text: "Top of the Core", icon: ListMusic },
                  { text: "Top All Time", icon: ListMusic },
                ],
              },
            ].map((group) => (
              <div className={"space-y-2 px-2"} key={group.title}>
                <h3 className="px-3 text-lg font-semibold tracking-tight">{group.title}</h3>
                <ScrollArea className={cn("space-y-1", group.scrollable && "h-[300px]")}>
                  {group.items.map((item) => (
                    <button
                      className={cn(
                        "inline-flex w-full items-center rounded-md border border-transparent px-3 py-2 text-sm hover:bg-accent/50 focus-visible:border-ring focus-visible:outline-0",
                        item.active && "border-border bg-accent/50"
                      )}
                    >
                      <item.icon className="mr-2 h-4 w-4" /> {item.text}
                    </button>
                  ))}
                </ScrollArea>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-4 h-full">
          <div className="h-full px-4 py-6 lg:px-8">
            <Tabs defaultValue="music">
              <TabsList>
                <TabsTrigger value="music">Music</TabsTrigger>
                <TabsTrigger value="podcasts">Podacsts</TabsTrigger>
                <TabsTrigger value="live" disabled>
                  Live
                </TabsTrigger>
              </TabsList>
              <div>
                <TabsContent value="music">
                  <div className="space-y-6">
                    <div className="mt-6 leading-none">
                      <h2 className="text-2xl font-bold tracking-tight">Listen Now</h2>
                      <p className="text-sm text-light-text">Top picks for you. Updated daily.</p>
                    </div>
                    <Separator className="my-4" />
                    <ScrollArea type="hover">
                      <div className="flex w-full items-center gap-4 pb-4">
                        {[
                          {
                            image: "/examples/music/stTheApparition.png",
                            name: "The Apparition",
                            artist: "Sleep Token",
                          },
                          {
                            image: "/examples/music/stTheSummoning.webp",
                            name: "Granite",
                            artist: "Sleep Token",
                          },
                          {
                            image: "/examples/music/badOmensDotm.webp",
                            name: "The Grey",
                            artist: "Bad Omens",
                          },
                          {
                            image: "/examples/music/lornaEp.webp",
                            name: "Of The Abyss",
                            artist: "Lorna Shore",
                          },
                          {
                            image: "/examples/music/polarisTdom.jpeg",
                            name: "Masochist",
                            artist: "Polaris",
                          },
                          {
                            image: "/examples/music/weekndAfterHours.jpg",
                            name: "After Hours",
                            artist: "The Weeknd",
                          },
                        ].map((song) => (
                          <MusicArtwork song={song} />
                        ))}
                        <ScrollBar className="h-2 hover:h-2.5" orientation="horizontal" />
                      </div>
                    </ScrollArea>
                    <div className="space-y-6">
                      <div className="mt-6 leading-none">
                        <h2 className="text-2xl font-bold tracking-tight">Made for You</h2>
                        <p className="text-sm text-light-text">Your personal playlists. Updated daily.</p>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <ScrollArea type="hover">
                      <div className="flex w-full items-start gap-4 pb-4">
                        {[
                          {
                            image: "/examples/music/stTmbte.jpeg",
                            name: "Take Me Back To Eden",
                            artist: "Sleep Token",
                          },
                          {
                            image: "/examples/music/badOmensDotm.webp",
                            name: "THE DEATH OF PEACE OF MIND",
                            artist: "Bad Omens",
                          },
                          {
                            image: "/examples/music/stSundowning.jpeg",
                            name: "Sundowning",
                            artist: "Sleep Token",
                          },
                          {
                            image: "/examples/music/lornaEp.webp",
                            name: "...And I Return To Nothingness - EP",
                            artist: "Lorna Shore",
                          },
                          {
                            image: "/examples/music/polarisTdom.jpeg",
                            name: "The Death of Me",
                            artist: "Polaris",
                          },
                          {
                            image: "/examples/music/weekndAfterHours.jpg",
                            name: "After Hours",
                            artist: "The Weeknd",
                          },
                        ].map((song) => (
                          <MusicArtwork className="max-w-[150px]" song={song} aspectRatio="3/4" />
                        ))}
                        <ScrollBar className="h-2 hover:h-2.5" orientation="horizontal" />
                      </div>
                    </ScrollArea>
                  </div>
                </TabsContent>
                <TabsContent value="podcasts">
                  <div className="space-y-6">
                    <div className="mt-6 leading-none">
                      <h2 className="text-2xl font-bold tracking-tight">New Episodes</h2>
                      <p className="text-sm text-light-text">Your favorite podcasts. Updated daily.</p>
                    </div>
                    <Separator className="my-4" />
                    <div className="place-item-center grid h-[450px] w-full place-content-center rounded border border-dashed border-separator">
                      <div className="flex max-w-[420px] flex-col items-center">
                        <Podcast className="h-10 w-10 text-light-text" />
                        <h3 className="mt-4 text-lg font-semibold leading-none">No episodes added</h3>
                        <p className="mb-4 mt-2 text-light-text">You have not added any podcasts. Add one below.</p>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variants={{ size: "sm" }}>Add Podcast</Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Add Podcast</DialogTitle>
                              <DialogDescription>Copy and paste the podcast feed URL to import.</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-2 py-4 text-sm">
                              <Label>Podcast URL</Label>
                              <Input
                                className=""
                                variants={{ size: "sm" }}
                                placeholder="https://example.com/feed.xml"
                              />
                            </div>
                            <DialogFooter>
                              <Button variants={{ size: "sm" }}>Import Podcast</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
