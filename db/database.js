import * as SQLite  from 'expo-sqlite';

const db = SQLite.openDatabase('cart.db');

export const init = ()=>{
    const Promise = new Promise ((res, rej)=>{
        db.transaction(
            (tx) => {
                tx.executeSql(`CREATE TABLE IF NOT EXISTS cart (
                id INTEGER PRIMARY KEY NOT NULL,
                title TEXT NOT NULL,
                price TEXT NOT NUll
                    )`,
                    [],
               () => res(),
              (err) => rej(err)
                    
                    
            )}
            
        );
        

    });

    return Promise;
};

