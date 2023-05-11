let album1 = makeAlbum("artist_1","First Album");
let album2 = makeAlbum("artist_2","Second Album");
let album3 = makeAlbum("artist_3","Third Album",3);
console.log(album1);
console.log(album2);
console.log(album3);

function makeAlbum (artist : string, title:string, noOfTracks?:number): {artist : string; title:string; noOfTracks?:number; }{
    if (noOfTracks !== undefined) {
        return{
            artist:artist,
            title: title,
            noOfTracks:noOfTracks
            }
    } else {
        return{
            artist:artist,
            title: title
        }
    }
}