const WORKOUTS_LIST = [
  {
    id: "0",
    title: "Fat burning workout",
    tutor: "Yan",
    imgUrl: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29ya291dCUyMGdyb3VwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    tutorImg: 'https://sun9-62.userapi.com/impg/6n2D_-1N0m3EPtQCdbfln_cfh_2UZyDus4avLw/qZv9Qh0ieFQ.jpg?size=715x833&quality=96&sign=c3a87a04e5f2ca919bae26701d9f0efc&type=album',
    longitude: "27.53581058119516",
    latitude: "53.923322351351175",
    description: 'I will show you hove to burn your fat in a proper way!',
    tutorDescription: "It doesn't matter which gym you are in. I started with a hall that did not have a beautiful sign and new equipment. There was only dust, rust and dirty mirrors. But it didn't scare me. However, no other room had such an atmosphere. So, I donвЂ™t understand why you are still sitting at home thinking that you can change. If you are shy and worried about how you look from the outside, believe me, this is not a reason to sit back at home. If you do not have enough courage and confidence to start taking care of yourself, then I am ready to help you !!!",
    instUrl: 'https://www.instagram.com/zet_kelvin/?hl=ru',
    address: "Victory Park",
    date: 1638189444871,
  },
  {
    id: "1",
    title: 'Street workout',
    tutor: 'Tikhon',
    imgUrl: 'https://fitseven.ru/wp-content/uploads/2019/10/uprajneniya-dlya-spiny.jpg',
    tutorImg: 'https://sun9-44.userapi.com/impg/D9PkoNaM4raf9ZXGS20EpQh-vxcAzbCkbV5NEg/PIoRIXiWTBE.jpg?size=827x835&quality=96&sign=e95aeb07528ae6bfc2d4b0fa17f7a4df&type=album',
    longitude: "27.5722875537997",
    latitude: "53.903003632975924",
    description: 'Street workout under the supervision of an experienced and certified trainer',
    tutorDescription: "'A man is not allowed to be an amateur in physical training. It is a shame for a man to grow old without recognizing the beauty and strength of which his body is capable.' - Socrates \n I will teach you how to transform your body and enjoy it!",
    instUrl: 'https://www.instagram.com/tihon_mironovich/?hl=ru',
    address: "vulica Frunze 2",
    date: 1638538935000,
  },
  {
    id: "2",
    title: 'Pull-ups only',
    tutor: 'Anna',
    imgUrl: 'http://x-promt.ru/sites/default/files/sites/all/themes/xpromt/images/go-go3.jpg',
    tutorImg:'https://sun9-26.userapi.com/impg/oEhLH-zdkocIFzDdkIy6V9PWnEbQew-jVlgsjw/_e-Xw-I1nf4.jpg?size=831x677&quality=96&sign=c4c47f1031bb7db0e25c78406e61f3bb&type=album',
    longitude: "27.537435278143363",
    latitude: "53.91611830966158",
    description: 'Do not be shy, these workouts will strengthen your body and bring pleasure.',
    tutorDescription:'I am a trainer with more than 5 years of experience and will gladly teach you everything that I know myself!',
    instUrl: 'https://www.instagram.com/p/CSPg1gsIEJU/',
    address: "Prospekte Pobeditelei 8",
    date: 1638228935000,
  },
  {
    id: "3",
    title: 'Workout',
    tutor: 'Pavel',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs1PhbmiKLjdjd6rJizES1iUZWT_RNsxadX3IkbkixJvy7HdsVsjWqLv5aJHbqkBEHkIQ&usqp=CAU',
    tutorImg: "https://sun9-57.userapi.com/impg/5V8DieYdnLOp2PORqDRx0VBlcTMoljbCJcC0bQ/tLeeBj0UuWs.jpg?size=831x559&quality=96&sign=896a117225211ac31bde3d0e0a78921a&type=album",
    longitude: "27.554436764624377",
    latitude: "53.930592781194186",
    description: "Anyone can pull up, I'll teach you how to do it right",
    tutorDescription: "November!!! It's time for cold iron and burning muscles !!! I am recruiting a team for outdoor training, if you want to change your body - welcome!",
    instUrl: 'https://www.instagram.com/workout.pavelrom/',
    address: "vulica Azizava 3",
    date: 1638553935000,
  },
  {
    id: "4",
    title: "Strength training outdoors",
    tutor: "Alex",
    imgUrl: "https://www.muscleandfitness.com/wp-content/uploads/2019/07/Hands-Clapping-Chaulk-Kettlebell.jpg?quality=86&strip=all",
    longitude: "27.519504646737932",
    latitude: "53.92488343410877",
    description: "some description",
    instUrl: "https://www.instagram.com/jannksyjanxy/",
    address: "Prospekte Pobeditelei 30",
    date: 1638638935000,
  },
  {
    id: "5",
    title: "Street workout",
    tutor: "Mikhail",
    imgUrl: "https://dk22sb66g7qaa.cloudfront.net/aesir-dam-viewports/1496389700_slider-fitness-3-1920.jpg?rel=2020-02-11+04%3A55%3A59",
    longitude: "27.534480205460284",
    latitude: "53.927138165537016",
    description: "some description",
    instUrl: "https://www.instagram.com/jannksyjanxy/",
    address: "Kamsamolskaje Voziera Beach",
    date: 1638229444871,
  },
  {
    id: "6",
    title: "Pull-ups only",
    tutor: "Nikita",
    imgUrl: "https://lh3.googleusercontent.com/proxy/1E_XhCtDZitFqhGv3qX4vFgRBPLZOSpYEQ5VqkrV643wo0aNIe9AQFMGnTRXi3B4tCHb8uparUHjKBBwjyfgkxKm4sDMGnaYvjnkkrwh-7i0c4CpZMESRSOU",
    longitude: "27.504161531428824",
    latitude: "53.93463986728029",
    description: "some description",
    instUrl: "https://www.instagram.com/jannksyjanxy/",
    address: "Prospekte Pobeditelei 20/3",
    date: 1638259444871,
  },
  {
    id: "7",
    title: "Strength training outdoors",
    tutor: "Den",
    imgUrl: "https://testosterone.pl/wiedza/wp-content/uploads/2020/06/street-workout-1.jpg",
    longitude: "27.53200648740471",
    latitude: "53.91596665450506",
    description: "some description",
    instUrl: "https://www.instagram.com/jannksyjanxy/",
    address: "vulica Hastely 7",
    date: 1638289444871,
  },
  {
    id: "8",
    title: "Running workouts",
    tutor: "Ivan",
    imgUrl: "https://www.polar.com/sites/default/files/sc/running-index-intro-bg-desktop.jpg",
    longitude: "27.505499551844284",
    latitude: "53.93009874399999",
    description: "some description",
    instUrl: "https://www.instagram.com/jannksyjanxy/",
    address: "Ulitsa Lesi Ukrainki 2",
    date: 1638679444871,
  },
  {
    id: "9",
    title: "Yoga",
    tutor: "Alesya",
    imgUrl: "https://www.yogabasics.com/yogabasics2017/wp-content/uploads/2021/01/yoga-class.jpeg",
    longitude: "27.527999234552013",
    latitude: "53.91951463059946",
    description: "some description",
    instUrl: "https://www.instagram.com/jannksyjanxy/",
    address: "Vulitsa Ihnatsenki 17",
    date: 1638909444871,
  },
  {
    id: "10",
    title: "Stretching",
    tutor: "Vasilisa",
    imgUrl: "https://post.healthline.com/wp-content/uploads/2020/02/woman_Stretching-1200x628-facebook-1200x628.jpg",
    longitude: "27.530440077354697",
    latitude: "53.9154674525016",
    description: "some description",
    instUrl: "https://www.instagram.com/jannksyjanxy/",
    address: "vulica Čechava 8",
    date: 1638215544871,
  },
  {
    id: "11",
    title: "Running workouts",
    tutor: "Sergey",
    imgUrl: "https://www.worldclass.ru/world_class_life/worldclass-lifestyle/detail/boxing.png",
    longitude: "27.517956728365483",
    latitude: "53.897339689904996",
    description: "some description",
    instUrl: "https://www.instagram.com/jannksyjanxy/",
    address: "vulica Volacha 15",
    date: 1638199444871,
  },
  {
    id: "12",
    title: "Parkour",
    tutor: "Vladimir",
    imgUrl: "https://my-kiev.com/wp-content/uploads/2021/04/dc418f6bcfde1146af7de9bfb76918e6-620x413.jpg",
    longitude: "27.560556873017315",
    latitude: "53.895689429248584",
    description: "some description",
    instUrl: "https://www.instagram.com/jannksyjanxy/",
    address: "vulica Kirava 8",
    date: 1638222444871,
  },
  {
    id: "13",
    title: "Yoga for beginners",
    tutor: "Eldar",
    imgUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/female-instructor-with-yoga-class-in-the-gym-royalty-free-image-700718696-1561407106.jpg?crop=1.00xw:0.752xh;0,0.238xh&resize=1200:*",
    longitude: "27.551790500121953",
    latitude: "53.91065166081406",
    description: "some description",
    instUrl: "https://www.instagram.com/jannksyjanxy/",
    address: "Prospekte Pobeditelei 4",
    date: 1638199444871,
  },
  {
    id: "14",
    title: "Football freestyle",
    tutor: "Ilya",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Football_freestyle_2013_Masters_epee_t171023.jpg",
    longitude: "27.548119438489277",
    latitude: "53.91403866664561",
    description: "some description",
    instUrl: "https://www.instagram.com/jannksyjanxy/",
    address: "square Starostinskaya Sloboda",
    date: 1638229444871,
  },
];

export default WORKOUTS_LIST;
