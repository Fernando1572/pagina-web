/**
 * Mi solucion original para este problema era muy larga pero era funcional, 
 * pero por culpa del profe, tuve que cambiar todo nomas
 * para usar arreglos ridiculamente largos y una funcion para todo
 * y asi evitar codigo repetitivo (estaba mejor lo que yo habia hecho por que si lo hice yo y sabia como funcionaba).
 */
/*
~~~~^^^^^^^^:::::::::..:.::.:::..:::::::::^::^^:^:^^^:^^:^:^^::^::::::.:::..::......................
^^^::::::::::::::::::::::::::::::::^^^^^^^^~!^^^^^^^^^:^^:^^::::::::::..:........:..................
:::::::::::::::::::::^::^^:^^^^^^^^^~^~^^^^?7?!~::^^:::::::::::::..::.......:....:..................
:::::::::::^^^^^^^^^^^^~~~~~~~~~~~~^~^^^^~J!.^!??7~~^:::::::...:..:.:..::::..:..::..................
^:^^^^^^^^^^^~~~~~~~~~!!~!~~!~~~~^^^^^:~7J!.:::.^~77???777!7!~~~:...::.:::::::..::::.:..::..........
~~~~~~~~~~~~!!!!!!!!!!!!!!~~~~~^^^::^!??~:..:.::.....:::::^^^~!777!~^::.::.::::::::::::::::..:......
~~~!!!!!!!777777!!!!!~~~~~^^^^^:^!?J?7~:.::::.::..::.:::..::....::^~!??~^::::::::::::::::::..:......
!!77!7777777!!!!~~~~~^^^^^^:^^7JJ?7~^::::.::.::..:::..::.::::..:.....:^7?7^::^::^::::::.::..........
7777!7!!!!~~~~~^^~^^^^^^^^^~JYJ7~^^::::.:::::::::::::::::::::::::...:...:!J!::::::::.:..............
!!~~~~~~~~~^~~^^^^^^^^^:^~Y577!!~^:::.::.::::::::.:::::::.::....:..:....:.:??:::.:..................
~~^~~^^^^^^^^^^^^^^^~~~~YPJ777!~::::::::::::::::::::::::..::::.::.:::...:...7?..::...:.:..........:.
~^^^^^^^^^^~~~~~!!!!!!7YY?7777!~:::..::.:.::.:::.:::..:::::::.:::...:..::..:.?!......:..............
^^^~~~~~!!!!7!!77!!!!!JY??777!~~^^::::::::::::::::::::::::::::::::::::.::..::^?:::..::...:...:::::::
~!!!7!777JYY5YJ7!~~!!7Y777!!~~^^::::::::.::::::::.:::..::.:::::::..::.:::::::.7^.:...:.:..:.::::::::
777???YGPY7~^~!!JJ?7!J?!!!~~^^^~^^::::::::::..:::::^^^^^::::::::~~!!777?77??777~.:::::::::^::^::::::
7!7JJ5B5J!:::...:^!?YY7~~~~!!!~~~^::...:::^^~!77??77!~~~:::::.:::::::::::::::::!?~:::^^::^::::::::^:
!!?YJBPJ?!::::::::..:!?JJ?77!!~~^::^~7777?7!!~~^:::::::::::::::::::::::::::::::.^??^:^^:::::::^:::^:
!!7??P5?7!^:::.::.:.::.^!?7!!!!~^~:~!!~^:::...::.::::::::.::::::::.:::::::..:....:~?!:::::::::::::::
~~7?775J!!~^::::::::::::::^^~!!!~^::::::::::::::::::::::::::::::::::::::::::::::::.:??^:^^^^:^^:::::
~^!!7!755?!!~^::::.::::::::^~~~~^^^:::::::::::::::::::::::::::::::::::.......::.:::^:?!:^^:^::^::::.
~~~!77??J55YJ7!!~^::::::::::^^^~~~^:::::::::::::::::::::::::::::::^^~~~!777???77?77!~?7:^^^:::::..::
~~~!!77????J555J?!~:^::::::::~~~~~~~^:::::::::::.::::^^~~~~!!7???????7!!!~~^^:::::..~J^::::.:::.:.::
!!!7!!!!~^~!!7?J5YJJ7!~~^^:^~~~~~!~~^::::::::^!!777???7!~~^^^^:::::::...:.:.::::::^??^:::::.:.::::::
!!!!~^^^^:^~^~^^^~!?J5J5J7~~~~^~~~~~~^:::::::^~~^^::::::::::::::::::::::::::::..^7J!.::.:::::::::^^:
^^^^^::::::::::::::^~~!7Y?^~!77!!!!~~~~:::::::::::::::::::::::::::::::::::..:^!??!:.:::::::::^^^^^^^
::::::::::::::::::::^^^^7YJ7!!!!!!!!777!~~~~::::::::::::::::::::::::::.:::^!?7!^.::::::^^^^^^^^^^:^^
::::::::::::::::^^:^^^^^~~?5J7!77??7???77!!~^^^:::::::::::::::::::::::^~7!!~::::::^::^^^^~^^^^^^::^:
::::::::^::^^:^^^^^^^^^~~!!7YPPYJ???77?77!7!~~~^~~:::::::::::::::::::~J?^:::::::^^^^^^^^^^^^^^^^:^^:
:::^^:^^^^^^^^^^~^~~~~~!!!777?JJ5YJJJ?J?7777!7!~^::::::::::::::::::::::~?!^^^^^^^^^^^^^^^^^^^^^^^^^^
^^^^^^^^^^^^~^~~!!!!7777777777!!77?JJJGP?77!!!!~^:::::::::::::::::::::::^7?!^~~~^~^^^^^^^^^^^^^^^^^^
:^^^^~^~~~~!!!!777777777777!7!!!!!77!YP77777777~^:::::::::::::::::::::::::^J7^^^^^^^^^^^^^^^^^^^^^^^
^^~~~~~!!!7??7????????77777!!7!!!!!7JGJ?????7!~^::::::::^^^:^:^:::::^:::::::??^^^~^^^^^^^^^^~^^^^:::
*/

const albums = [
    {
        album: "Please Please Me",
        anio: 1963,
        discografica: "Parlophone",
        num_canciones: 14,
        canciones: [
            {
                titulo: "I Saw Her Standing There",
                link: "https://www.youtube.com/embed/oxwAB3SECtc?si=P1A1MU3YZZVMWYed",
                duracion: "2:53",
            },
            {
                titulo: "Misery",
                link: "https://www.youtube.com/embed/qhbcN3ew9z0?si=UWYeDuf2eRc8tc-8",
                duracion: "1:48",
            },
            {
                titulo: "Anna (Go To Him)",
                link: "https://www.youtube.com/embed/b3zNKWyLfus?si=n6eFnKPkFLZTEiPG",
                duracion: "2:57",
            },
            {
                titulo: "Chains",
                link: "https://www.youtube.com/embed/rJOhavaeJYk?si=oTgThdrhr_Cssrj0",
                duracion: "2:26",
            },
            {
                titulo: "Boys",
                link: "https://www.youtube.com/embed/Qr8OuW5JJgQ?si=df6E2diY-HUR2AZ6",
                duracion: "2:27",
            },
            {
                titulo: "Ask Me Why",
                link: "https://www.youtube.com/embed/2ttGjtfQ7EA?si=_I874aTAVsX5mwpO",
                duracion: "2:24",
            },
            {
                titulo: "Please Please Me",
                link: "https://www.youtube.com/embed/czw8eqepir8?si=EvAp9g_aURLnfoAT",
                duracion: "1:59",
            },
            {
                titulo: "Love Me Do",
                link: "https://www.youtube.com/embed/0pGOFX1D_jg?si=dyMiHObwFWeTfeUg",
                duracion: "2:23",
            },
            {
                titulo: "P.S. I Love You",
                link: "https://www.youtube.com/embed/MA5DkiVKSlM?si=rFGK5H_3G-FI9fGZ",
                duracion: "2:04",
            },
            {
                titulo: "Baby It's You",
                link: "https://www.youtube.com/embed/AWUTlM6hz0g?si=pnHTmz4XOOOeOFYv",
                duracion: "2:38",
            },
            {
                titulo: "Do You Want To Know A Secret",
                link: "https://www.youtube.com/embed/uRQ7ecvU56k?si=UGEdOscQVuETbg_p",
                duracion: "1:57",
            },
            {
                titulo: "A Taste Of Honey",
                link: "https://www.youtube.com/embed/MkQ1eOcl5ug?si=PlVFvWuhF4dVQxNK",
                duracion: "2:04",
            },
            {
                titulo: "There's A Place",
                link: "https://www.youtube.com/embed/vTsbYbN8VVI?si=84Vo2So-fNBbCGNz",
                duracion: "1:50",
            },
            {
                titulo: "Twist And Shout",
                link: "https://www.youtube.com/embed/2RicaUqd9Hg?si=1WV5gLEkK8Jiia1a",
                duracion: "2:33",
            }
        ]
    },
    {
        album: "Help!",
        anio: 1965,
        discografica: "Parlophone",
        num_canciones: 14,
        canciones: [
            {
                titulo: "Help!",
                link: "https://www.youtube.com/embed/MKUex3fci5c?si=UkmtCOFf1ieYvZ_1",
                duracion: "2:19",
            },
            {
                titulo: "The Night Before",
                link: "https://www.youtube.com/embed/7tD40D7jk-Q?si=iCsLD2m91Lnnd79x",
                duracion: "2:34",
            },
            {
                titulo: "You've Got To Hide Your Love Away",
                link: "https://www.youtube.com/embed/V8nLraecPRY?si=_3XndXMVJT_Mm4Tl",
                duracion: "2:08",
            },
            {
                titulo: "I Need You",
                link: "https://www.youtube.com/embed/6t24nX_sak8?si=s_XwMC1LwHmzsfPV",
                duracion: "2:27",
            },
            {
                titulo: "Another Girl",
                link: "https://www.youtube.com/embed/EMBYNWr5R_U?si=95CKPKETApY5jAnw",
                duracion: "2:05",
            },
            {
                titulo: "You're Going To Lose That Girl",
                link: "https://www.youtube.com/embed/vqpEZuv29qE?si=740qJDBwOnJUF2dO",
                duracion: "2:17",
            },
            {
                titulo: "Ticket To Ride",
                link: "https://www.youtube.com/embed/SyNt5zm3U_M?si=RN6xDuV2OrYwAw6I",
                duracion: "3:10",
            },
            {
                titulo: "Act Naturally",
                link: "https://www.youtube.com/embed/yjJd8rZPcAQ?si=TEFr6nKYoB8L-fcJ",
                duracion: "2:31",
            },
            {
                titulo: "It's Only Love",
                link: "https://www.youtube.com/embed/OPiKDHYCkjs?si=RO8foMpx_8vTfV_y",
                duracion: "1:56",
            },
            {
                titulo: "You Like Me Too Much",
                link: "https://www.youtube.com/embed/ZqCf3D26YlA?si=DDUjXj_pBEmS-pVb",
                duracion: "2:36",
            },
            {
                titulo: "Tell Me What You See",
                link: "https://www.youtube.com/embed/bztiAcsATyI?si=BAIsbNiUM9i_sEeb",
                duracion: "2:40",
            },
            {
                titulo: "I've Just Seen a Face",
                link: "https://www.youtube.com/embed/m8LbJfC0SYM?si=wGY0IVA1k0mVXmJ1",
                duracion: "2:04",
            },
            {
                titulo: "Yesterday",
                link: "https://www.youtube.com/embed/NrgmdOz227I?si=tpGr5LjyJ3b_Tx83",
                duracion: "2:05",
            },
            {
                titulo: "Dizzy Miss Lizzle",
                link: "https://www.youtube.com/embed/psJ1cHm_su4?si=_9DMCKaCGCjkOFi2",
                duracion: "2:54",
            }
        ]
    }
];

function cambiarVideo(albumIndex, cancionIndex) {
    const video = document.getElementById(`video${albumIndex + 1}`);
    const cancion = albums[albumIndex].canciones[cancionIndex];
    video.src = cancion.link;
}
