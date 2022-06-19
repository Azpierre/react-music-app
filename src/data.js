import { v4 as uuidv4 } from "uuid";

function songsData() {
  return [
    {
      name: "Frozen Firs",
      artist: "goosetaf, xander., Anbuu",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#604F7B", "#CDB4C7"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10313",
    },
    {
      name: "Tumble's Lullaby",
      artist: "Stan Forebee, Kyle McEvoy",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/38147ead546d4fcc613080507497fe5502a5a241-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#69CAC1", "#FED7BA"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8863",
    },
    {
      name: "Lilo",
      artist: "Middle School, The Field Tapes",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#A0BC5F", "#F2DB82"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11244",
    },
    {
      name: "Longing",
      artist: "Makzo",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#919FCE", "#37518B"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=11777",
    },
  ];
}

export default songsData;
