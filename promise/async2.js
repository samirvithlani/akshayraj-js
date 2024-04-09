const generateSongs = () => {
  var songs = [
    {
      title: "song1",
      artist: "artist1",
    },
    {
      title: "song2",
      artist: "artist2",
    },
  ];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(songs);
    }, 3000);
  });
};

const createPlayList = (songs) => {


    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                playlistName:"My Favourite Songs",
                songs:songs
            })
        },2000)
    })



}

const playSong = async () => {
  console.log("starts");


    console.log("songs are being fetched...")
    const songs = await generateSongs();
    console.log(songs);
    const playlist = await createPlayList(songs);
    console.log("playlist is being created...")
    console.log(playlist)



    //callback hell
//   generateSongs().then((songs) => {
//     console.log(songs);
//     console.log("songs are being fetched...");
//     console.log("playlist is being created...")
//     createPlayList(songs).then((playlist)=>{
//         console.log(playlist)
//     }).catch((err)=>{
//         console.log(err)
//     })
//   }).catch((err) => {
//     console.log(err);
//   })
};
playSong(); // starts
