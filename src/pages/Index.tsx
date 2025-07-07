import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([75]);
  const [searchQuery, setSearchQuery] = useState("");
  const [likedTracks, setLikedTracks] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState<"popular" | "my-tracks">(
    "popular",
  );

  const myTracks = [
    {
      id: 7,
      title: "Моя первая композиция",
      artist: "Вы",
      duration: "3:12",
      genre: "Original",
      likes: 45,
      plays: 234,
    },
    {
      id: 8,
      title: "Летний вайб",
      artist: "Вы",
      duration: "4:01",
      genre: "Chill",
      likes: 78,
      plays: 512,
    },
    {
      id: 9,
      title: "Ночной драйв",
      artist: "Вы",
      duration: "3:45",
      genre: "Electronic",
      likes: 123,
      plays: 890,
    },
  ];

  const tracks = [
    {
      id: 1,
      title: "Cosmic Journey",
      artist: "DJ Nebula",
      duration: "3:45",
      genre: "Electronic",
      likes: 1204,
    },
    {
      id: 2,
      title: "Night Rider",
      artist: "SynthWave",
      duration: "4:22",
      genre: "Synthwave",
      likes: 892,
    },
    {
      id: 3,
      title: "Digital Dreams",
      artist: "CyberBeat",
      duration: "3:18",
      genre: "Techno",
      likes: 2341,
    },
    {
      id: 4,
      title: "Bass Drop",
      artist: "ElectroMax",
      duration: "2:56",
      genre: "Dubstep",
      likes: 1567,
    },
    {
      id: 5,
      title: "Stellar Waves",
      artist: "SpaceSound",
      duration: "4:08",
      genre: "Ambient",
      likes: 734,
    },
    {
      id: 6,
      title: "Rhythm Machine",
      artist: "BeatMaster",
      duration: "3:33",
      genre: "House",
      likes: 1876,
    },
  ];

  const featuredArtists = [
    { name: "DJ Nebula", tracks: 24, followers: "12.5K" },
    { name: "SynthWave", tracks: 18, followers: "8.2K" },
    { name: "CyberBeat", tracks: 31, followers: "15.7K" },
    { name: "ElectroMax", tracks: 42, followers: "22.1K" },
  ];

  const toggleLike = (trackId: number) => {
    setLikedTracks((prev) =>
      prev.includes(trackId)
        ? prev.filter((id) => id !== trackId)
        : [...prev, trackId],
    );
  };

  const filteredTracks = tracks.filter(
    (track) =>
      track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.artist.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const filteredMyTracks = myTracks.filter(
    (track) =>
      track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      track.artist.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const currentTrackList =
    activeTab === "popular" ? filteredTracks : filteredMyTracks;

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 music-gradient rounded-full flex items-center justify-center">
                <Icon name="Music" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
                MusicStream
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-red-500 transition-colors font-medium"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
              >
                Музыка
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
              >
                Артисты
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden sm:flex">
                <Icon name="Upload" size={16} className="mr-2" />
                Загрузить трек
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>ПО</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 via-blue-500 to-orange-500 bg-clip-text text-transparent">
            Твоя музыка, твой мир
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Загружай треки, создавай плейлисты, делись музыкой с миром
          </p>
          <div className="max-w-md mx-auto relative">
            <Input
              type="text"
              placeholder="Поиск треков и артистов..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-lg rounded-full border-2 border-gray-200 focus:border-red-400"
            />
            <Icon
              name="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setActiveTab("popular")}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === "popular"
                    ? "bg-white text-red-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Icon name="TrendingUp" size={16} className="mr-2 inline" />
                Популярные треки
              </button>
              <button
                onClick={() => setActiveTab("my-tracks")}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === "my-tracks"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Icon name="User" size={16} className="mr-2 inline" />
                Мои треки
              </button>
            </div>

            {/* Track List */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Icon
                      name={activeTab === "popular" ? "TrendingUp" : "User"}
                      className={`mr-2 ${activeTab === "popular" ? "text-red-500" : "text-blue-500"}`}
                      size={24}
                    />
                    {activeTab === "popular" ? "Популярные треки" : "Мои треки"}
                  </span>
                  <Badge
                    variant="secondary"
                    className={
                      activeTab === "popular"
                        ? "bg-red-100 text-red-700"
                        : "bg-blue-100 text-blue-700"
                    }
                  >
                    {currentTrackList.length} треков
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {currentTrackList.map((track, index) => (
                    <div
                      key={track.id}
                      className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-blue-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon name="Music" className="text-white" size={20} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {track.title}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {track.artist}
                          </p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {track.genre}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-500">
                          {track.duration}
                        </span>
                        {activeTab === "my-tracks" && (
                          <div className="flex items-center space-x-2">
                            <Icon
                              name="Eye"
                              size={14}
                              className="text-gray-500"
                            />
                            <span className="text-xs text-gray-500">
                              {(track as any).plays}
                            </span>
                          </div>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleLike(track.id)}
                          className={
                            likedTracks.includes(track.id)
                              ? "text-red-500"
                              : "text-gray-400"
                          }
                        >
                          <Icon
                            name="Heart"
                            size={16}
                            className={
                              likedTracks.includes(track.id)
                                ? "fill-current"
                                : ""
                            }
                          />
                          <span className="ml-1 text-xs">{track.likes}</span>
                        </Button>
                        {activeTab === "my-tracks" && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-orange-500 hover:text-orange-600"
                          >
                            <Icon name="Edit" size={16} />
                          </Button>
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setCurrentTrack(index);
                            setIsPlaying(!isPlaying);
                          }}
                          className="text-blue-500 hover:text-blue-600"
                        >
                          <Icon
                            name={
                              isPlaying && currentTrack === index
                                ? "Pause"
                                : "Play"
                            }
                            size={16}
                          />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upload Section */}
            <Card className="music-gradient-subtle border-2 border-dashed border-gray-300 hover:border-red-400 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Upload" className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Загрузи свой трек
                </h3>
                <p className="text-gray-600 mb-6">
                  Поделись своей музыкой с миллионами слушателей
                </p>
                <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-3 rounded-full">
                  Выбрать файл
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Player */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Music" className="mr-2 text-blue-500" size={20} />
                  Плеер
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-red-400 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <Icon name="Music" className="text-white" size={48} />
                  </div>
                  <h3 className="font-semibold">
                    {currentTrackList[currentTrack]?.title || "Выберите трек"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {currentTrackList[currentTrack]?.artist || "Артист"}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-center space-x-4">
                    <Button variant="ghost" size="sm">
                      <Icon name="SkipBack" size={20} />
                    </Button>
                    <Button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-600"
                    >
                      <Icon
                        name={isPlaying ? "Pause" : "Play"}
                        className="text-white"
                        size={20}
                      />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Icon name="SkipForward" size={20} />
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Volume2" size={16} className="text-gray-500" />
                    <Slider
                      value={volume}
                      onValueChange={setVolume}
                      max={100}
                      step={1}
                      className="flex-1"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Featured Artists */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="Users"
                    className="mr-2 text-orange-500"
                    size={20}
                  />
                  Популярные артисты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {featuredArtists.map((artist, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src="/placeholder.svg" />
                          <AvatarFallback>
                            {artist.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-medium">{artist.name}</h4>
                          <p className="text-sm text-gray-600">
                            {artist.tracks} треков
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">
                          {artist.followers}
                        </p>
                        <p className="text-xs text-gray-500">подписчиков</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Playlists */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon
                    name="ListMusic"
                    className="mr-2 text-blue-500"
                    size={20}
                  />
                  Мои плейлисты
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-pink-400 rounded-lg flex items-center justify-center">
                        <Icon name="Heart" className="text-white" size={16} />
                      </div>
                      <div>
                        <h4 className="font-medium">Избранное</h4>
                        <p className="text-sm text-gray-600">
                          {likedTracks.length} треков
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                        <Icon name="Zap" className="text-white" size={16} />
                      </div>
                      <div>
                        <h4 className="font-medium">Энергичная музыка</h4>
                        <p className="text-sm text-gray-600">15 треков</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-400 rounded-lg flex items-center justify-center">
                        <Icon name="Coffee" className="text-white" size={16} />
                      </div>
                      <div>
                        <h4 className="font-medium">Для работы</h4>
                        <p className="text-sm text-gray-600">23 трека</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
