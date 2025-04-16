

import client from '@/lib/mongodb'



export const useUser = ()=>{

    const myDB = client.db('music_player');
    const users = myDB.collection('users');

}