/**
 * Mi solucion original para este problema muy larga pero era funcional, 
 * pero por culpa del profe, tuve que cambiar todo nomas
 * para usar arreglos ridiculamente largos y una funcion para todo
 * y asi evitar codigo repetitivo (estaba mejor lo que yo habia hecho por que si lo hice yo y no el profe).
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

/**
 * Y ahora resulta que para subir esto y entregarlo de una m*****a vez, tengo que poner albums diferentes y als canciones de ese album :!
 */


const albums = [
    {
        album: "Whit the Beatles",
        anio: 1963,
        discografica: "Odeon",
        num_canciones: 14,
        canciones: [
            {
                titulo: "It Won't Be Long",
                link: "https://www.youtube.com/embed/UVKU6SevefY?si=rBAIdj5W7jupWVc2",
                duracion: "2:14",
            },
            {
                titulo: "All I've Got to Do",
                link: "https://www.youtube.com/embed/anMW41uvb_s?si=FODgUDtEi35vfNR8",
                duracion: "2:03",
            },
            {
                titulo: "All My Loving",
                link: "https://www.youtube.com/embed/TSpiwK5fig0?si=rB0wxalttTDiH3xO",
                duracion: "2:08",
            },
            {
                titulo: "Don't Bother Me",
                link: "https://www.youtube.com/embed/k03IQbaTcxc?si=YNC0KCVFyFomullF",
                duracion: "2:29",
            },
            {
                titulo: "Little Child",
                link: "https://www.youtube.com/embed/DVMfLIoejTc?si=sPfwHmybuylVFlz-",
                duracion: "1:47",
            },
            {
                titulo: "Till There Was You",
                link: "https://www.youtube.com/embed/SHAqAO7w8M8?si=JHFhyLahvHokXC-E",
                duracion: "2:14",
            },
            {
                titulo: "Please Mister Postman",
                link: "https://www.youtube.com/embed/v2Kk5IG2b8E?si=RkI09BoT-sdNgaq_",
                duracion: "2:35",
            },
            {
                titulo: "Roll Over Beethoven",
                link: "https://www.youtube.com/embed/Hz5jXwOXgKQ?si=vex6FMWGxrC_H2Ea",
                duracion: "2:45",
            },
            {
                titulo: "Hold Me Tight",
                link: "https://www.youtube.com/embed/H42Ou13za30?si=AVXAQ27le3L48YLJ",
                duracion: "2:31",
            },
            {
                titulo: "You Really Got A Hold On Me",
                link: "https://www.youtube.com/embed/9rokS8Ao4nQ?si=spi4kPF0JsHoDxeJ",
                duracion: "2:38",
            },
            {
                titulo: "I Wanna Be Your Man",
                link: "https://www.youtube.com/embed/mnct7Qf3SUQ?si=nvX3JiTEhjLntgJd",
                duracion: "2:00",
            },
            {
                titulo: "Devil In Her Heart",
                link: "https://www.youtube.com/embed/IGe-jfFrxCk?si=zp2B59x0rD2xlyzs",
                duracion: "2:26",
            },
            {
                titulo: "Not A Second Time",
                link: "https://www.youtube.com/embed/Gi8dTDuRCOk?si=lmzkb9jFFK3t03L_",
                duracion: "2:06",
            },
            {
                titulo: "Money (That's What I Want)",
                link: "https://www.youtube.com/embed/CeWjEYhk7Xo?si=0LnCtarhurCiIS7O",
                duracion: "2:33",
            }
        ]
    },
    {
        album: "Sgt Peppers Lonely Hearts Club Band",
        anio: 1967,
        discografica: "Parlophone",
        num_canciones: 13,
        canciones: [
            {
                titulo: "Sgt Peppers Lonely Hearts Club Band",
                link: "https://www.youtube.com/embed/VtXl8xAPAtA?si=iRkNShXbmgvLhWwL",
                duracion: "2:02",
            },
            {
                titulo: "With A Little Help From My Friends",
                link: "https://www.youtube.com/embed/0C58ttB2-Qg?si=qqFfpPXwxggGYVu5",
                duracion: "2:44",
            },
            {
                titulo: "Lucy In The Sky With Diamonds",
                link: "https://www.youtube.com/embed/naoknj1ebqI?si=HSZ5wSRWXcEOl6ni",
                duracion: "3:28",
            },
            {
                titulo: "Getting Better",
                link: "https://www.youtube.com/embed/EGlo9LzmOME?si=S8zayh0VKGeqS1PJ",
                duracion: "2:48",
            },
            {
                titulo: "Fixing A Hole",
                link: "https://www.youtube.com/embed/UPBd8eHQqIw?si=oqhdZA9h3g-yU4ql",
                duracion: "2:36",
            },
            {
                titulo: "She's Leaving Home",
                link: "https://www.youtube.com/embed/VaBPY78D88g?si=_poabTiKSN8rspf8",
                duracion: "3:35",
            },
            {
                titulo: "Being For The Benefit Of My. Kite!",
                link: "https://www.youtube.com/embed/bJVWZy4QOy0?si=ymjUovDg87YkmYKF",
                duracion: "2:37",
            },
            {
                titulo: "Within You Without You",
                link: "https://www.youtube.com/embed/HsffxGyY4ck?si=4XUGTM7yNlCJsO_4",
                duracion: "5:05",
            },
            {
                titulo: "When I'm Sixty Four",
                link: "https://www.youtube.com/embed/HCTunqv1Xt4?si=3A76M3z5MKgijUJH",
                duracion: "2:37",
            },
            {
                titulo: "Lovely Rita",
                link: "https://www.youtube.com/embed/ysDwR5SIR1Q?si=bQifrfIgAWOK2bf1",
                duracion: "2:43",
            },
            {
                titulo: "Good Morning Good Morning",
                link: "https://www.youtube.com/embed/sjb9AxDkwAQ?si=tI1ZzSB44mRaBfM4",
                duracion: "2:42",
            },
            {
                titulo: "Sgt Peppers Lonely Hearts Club Band - Reprise",
                link: "https://www.youtube.com/embed/aP47nqo2cf4?si=iSAcd6ZpRciZsAtC",
                duracion: "1.20",
            },
            {
                titulo: "A Day In The Life",
                link: "https://www.youtube.com/embed/UYeV7jLBXvA?si=kFY1mB_Olb6x8Php",
                duracion: "5:07",
            }
        ]
    }
];

function cambiarVideo(albumIndex, cancionIndex) {
    const video = document.getElementById(`video${albumIndex + 1}`);
    const cancion = albums[albumIndex].canciones[cancionIndex];
    video.src = cancion.link;
}

