
require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




  ActiveRecord::Base.transaction do
  
    User.destroy_all

    kendrick = User.create!(email: "kendrick@email.com", 
      screen_name: "kDOT", 
      password: "password", 
      full_name: "Kendrick Lamar Duckworth", 
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/kendrick.png"), filename:"kendrick.png"})
      
    courtney = User.create!(email: "courtney@email.com",
      screen_name: "Courtney",
      password: "passwioord",
      full_name: "Courtney Barnett",
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/courtney.jpg"), filename: "courtney.jpg"})
      
    janelle = User.create!(email:"janelle@email.com",
      screen_name: "Janelle",
      password: "password",
      full_name: "Janelle Monae",
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/janelle.jpg"), filename: "janelle.jpg"})
      
    tame_impala = User.create!(email:"tameimpala@email.com",
      screen_name: "Tame Impala",
      password: "password",
      full_name: "Kevin Parker",
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/tame_impala.jpg"), filename: "tame_impala.jpg"})
      
    earl = User.create!(email:"earl@email.com",
      screen_name: "Earl Sweatshirt",
      password: "password",
      full_name: "Thebe Kgositsile",
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/earl.jpg"), filename: "earl.jpg"})
      
    louis = User.create!(email: "louis.leon@gmail.com", 
      screen_name: "Louis XV", 
      password: "runner39", 
      full_name: "Louis Leon")
  
    jacob = User.create!(email: "jacob@email.com", 
      screen_name: "CiabattaBoi", 
      password: "asdfghjkl;'", 
      full_name: "Jacob Leon",
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/jacob.jpg"), filename: "jacob.jpg"})
    
    Song.destroy_all
  
    song1 = Song.new(
      title: "Money Trees",
      description:"Good Kid, M.A.A.D City (stylized as good kid, m.A.A.d city) is the second studio album by American rapper Kendrick Lamar. It was released on October 22, 2012, by Aftermath Entertainment, Interscope Records, and Top Dawg Entertainment. The album is Lamar's major label debut, after his independently released first album Section.80 in 2011 and his signing to Aftermath and Interscope the following year.",
      genre: "hip-hop",
      release_date: "22/10/2012",
      user_id: kendrick.id          ,
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/kendrick_album1.jpg"), filename: "kendrick_album1.jpg"},
      song_file: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/song1.mp3"), filename: "song1.mp3"}
    )
    song2 = Song.create!(
      title: "M.A.A.D City",
      description:"Good Kid, M.A.A.D City (stylized as good kid, m.A.A.d city) is the second studio album by American rapper Kendrick Lamar. It was released on October 22, 2012, by Aftermath Entertainment, Interscope Records, and Top Dawg Entertainment. The album is Lamar's major label debut, after his independently released first album Section.80 in 2011 and his signing to Aftermath and Interscope the following year.",
      genre: "hip-hop",
      release_date:"22/10/2012",
      user_id: kendrick.id,
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/kendrick_album1.jpg"), filename: "kendrick_album1.jpg"},
      song_file: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/song2.mp3"), filename: "song2.mp3"}
    )
    song3 = Song.create!(
      title: "Poetic Justice",
      description:"Good Kid, M.A.A.D City (stylized as good kid, m.A.A.d city) is the second studio album by American rapper Kendrick Lamar. It was released on October 22, 2012, by Aftermath Entertainment, Interscope Records, and Top Dawg Entertainment. The album is Lamar's major label debut, after his independently released first album Section.80 in 2011 and his signing to Aftermath and Interscope the following year.",
      genre: "hip-hop",
      release_date:"22/10/2012",
      user_id: kendrick.id,
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/kendrick_album1.jpg"), filename: "kendrick_album1.jpg"},
      song_file: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/song3.mp3"), filename: "song3.mp3"}
    )
    song4 = Song.create!(
      title: "The Art of Peer Pressure",
      description:"Good Kid, M.A.A.D City (stylized as good kid, m.A.A.d city) is the second studio album by American rapper Kendrick Lamar. It was released on October 22, 2012, by Aftermath Entertainment, Interscope Records, and Top Dawg Entertainment. The album is Lamar's major label debut, after his independently released first album Section.80 in 2011 and his signing to Aftermath and Interscope the following year.",
      genre: "hip-hop",
      release_date:"22/10/2012",
      user_id: kendrick.id,
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/kendrick_album1.jpg"), filename: "kendrick_album1.jpg"},
      song_file: {io: open("/Users/louisleon/desktop/sound_crowd_seed_assets/song4.mp3"), filename: "song4.mp3"}
    )
    song5 = Song.create!(
      title: "Elevator Operator",
      description:"Sometimes I Sit and Think, and Sometimes I Just Sit is the debut studio album by Australian indie rock musician Courtney Barnett, released on 20 March 2015. The album received wide acclaim and was ranked as one of the best albums of 2015 by numerous publications.",
      genre:"indie/alternative",
      release_date:"15/03/2015",
      user_id: courtney.id,
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/courtney_album1.jpg"), filename: "courtney_album1.jpg"},
      song_file: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/song5.mp3"), filename: "song5.mp3"}
    )
    song6 = Song.create!(
      title: "Pedestrian at best",
      description:"Sometimes I Sit and Think, and Sometimes I Just Sit is the debut studio album by Australian indie rock musician Courtney Barnett, released on 20 March 2015. The album received wide acclaim and was ranked as one of the best albums of 2015 by numerous publications.",
      genre:"indie/alternative",
      release_date:"15/03/2015",
      user_id: courtney.id,
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/courtney_album1.jpg"), filename: "courtney_album1.jpg"},
      song_file: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/song6.mp3"), filename: "song6.mp3"}
    )
    song7 = Song.create!(
      title: "Depreston",
      description:"Sometimes I Sit and Think, and Sometimes I Just Sit is the debut studio album by Australian indie rock musician Courtney Barnett, released on 20 March 2015. The album received wide acclaim and was ranked as one of the best albums of 2015 by numerous publications.",
      genre:"indie/alternative",
      release_date:"15/03/2015",
      user_id: courtney.id,
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/courtney_album1.jpg"), filename: "courtney_album1.jpg"},
      song_file: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/song7.mp3"), filename: "song7.mp3"}
    )
    song8 = Song.create!(
      title: "Dirty Computer",
      description:"Monáe has given us a pop record that feels gleefully youthful, perhaps even the album she wishes she could have had as a teen in Kansas City. The songwriting is precise if not always flawless. The reckless and joyful Screwed embodies the occasional, devil-may-care nihilism experienced by queer people of color living under a surveillance state. It also contains one of the funkiest and technically impressive basslines you’ll hear on an album already in awe of Chic and George Clinton.",
      genre:"pop",
      release_date:"27/04/2018",
      user_id: janelle.id,
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/janelle_album1.jpg"), filename: "janelle_album1.jpg"},
      song_file: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/song8.mp3"), filename: "song8.mp3"}
    )
    song9 = Song.create!(
      title: "Make Me Feel",
      description:"Monáe has given us a pop record that feels gleefully youthful, perhaps even the album she wishes she could have had as a teen in Kansas City. The songwriting is precise if not always flawless. The reckless and joyful Screwed embodies the occasional, devil-may-care nihilism experienced by queer people of color living under a surveillance state. It also contains one of the funkiest and technically impressive basslines you’ll hear on an album already in awe of Chic and George Clinton.",
      genre:"pop",
      release_date:"27/04/2018",
      user_id: janelle.id,
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/janelle_album1.jpg"), filename: "janelle_album1.jpg"},
      song_file: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/song9.mp3"), filename: "song9.mp3"}
    )
    song10 = Song.create!(
      title: "Pynk",
      description:"Monáe has given us a pop record that feels gleefully youthful, perhaps even the album she wishes she could have had as a teen in Kansas City. The songwriting is precise if not always flawless. The reckless and joyful Screwed embodies the occasional, devil-may-care nihilism experienced by queer people of color living under a surveillance state. It also contains one of the funkiest and technically impressive basslines you’ll hear on an album already in awe of Chic and George Clinton.",
      genre:"pop",
      release_date:"27/04/2018",
      user_id: janelle.id,
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/janelle_album1.jpg"), filename: "janelle_album1.jpg"},
      song_file: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/song10.mp3"), filename: "song10.mp3"}
    )
    song11 = Song.create!(
      title: "Let It Happen",
      description:"Currents is the third studio album by Australian rock band Tame Impala, released on 17 July 2015 by Modular Recordings through Universal Music Australia in Australia, Fiction Records in Europe and Interscope Records in the United States. Like the group's previous two albums, Currents was written, recorded, performed, and produced by primary member Kevin Parker. For the first time, Parker also mixed the music. It was also the first time that Parker recorded all instruments by himself; the album featured no other collaborators.",
      genre:"indie/alternative",
      release_date:"17/07/2015",
      user_id: tame_impala.id,
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/tame_impala_album1.jpg"), filename: "tame_impala_album1.jpg"},
      song_file: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/song11.mp3"), filename: "song1.mp3"}
    )
    song12 = Song.create!(
      title: "Yes I'm Changing",
      description:"Currents is the third studio album by Australian rock band Tame Impala, released on 17 July 2015 by Modular Recordings through Universal Music Australia in Australia, Fiction Records in Europe and Interscope Records in the United States. Like the group's previous two albums, Currents was written, recorded, performed, and produced by primary member Kevin Parker. For the first time, Parker also mixed the music. It was also the first time that Parker recorded all instruments by himself; the album featured no other collaborators.",
      genre:"indie/alternative",
      release_date:"17/07/2015",
      user_id: tame_impala.id,
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/tame_impala_album1.jpg"), filename: "tame_impala_album1.jpg"},
      song_file: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/song12.mp3"), filename: "song12.mp3"}
    )
    song13 = Song.create!(
      title: "Eventually",
      description:"Currents is the third studio album by Australian rock band Tame Impala, released on 17 July 2015 by Modular Recordings through Universal Music Australia in Australia, Fiction Records in Europe and Interscope Records in the United States. Like the group's previous two albums, Currents was written, recorded, performed, and produced by primary member Kevin Parker. For the first time, Parker also mixed the music. It was also the first time that Parker recorded all instruments by himself; the album featured no other collaborators.",
      genre:"indie/alternative",
      release_date:"17/07/2015",
      user_id: tame_impala.id,
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/tame_impala_album1.jpg"), filename: "tame_impala_album1.jpg"},
      song_file: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/song13.mp3"), filename: "song13.mp3"}
    )
    song14 = Song.create!(
      title: "The Less I Know the Better",
      description:"Currents is the third studio album by Australian rock band Tame Impala, released on 17 July 2015 by Modular Recordings through Universal Music Australia in Australia, Fiction Records in Europe and Interscope Records in the United States. Like the group's previous two albums, Currents was written, recorded, performed, and produced by primary member Kevin Parker. For the first time, Parker also mixed the music. It was also the first time that Parker recorded all instruments by himself; the album featured no other collaborators.",
      genre:"indie/alternative",
      release_date:"17/07/2015",
      user_id: tame_impala.id,
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/tame_impala_album1.jpg"), filename: "tame_impala_album1.jpg"},
      song_file: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/song14.mp3"), filename: "song14.mp3"}
    )
    song15 = Song.create!(
      title: "Sunday",
      description:"Doris is the debut studio album by American rapper Earl Sweatshirt. It was released on August 20, 2013, by Columbia Records, Odd Future Records and Tan Cressida Records. Doris follows his first mixtape Earl, which was released in 2010 when he was sixteen. After returning from a forced stay in a Samoan boarding school, he began working on his debut album and signed a deal with Columbia, rather than Odd Future's Odd Future Records.",
      genre:"hip-hop",
      release_date: "20/08/2013",
      user_id: earl.id,
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/earl_album1.jpg"), filename: "earl_album1.jpg"},
      song_file: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/song15.mp3"), filename: "song15.mp3"}
    )
    song16 = Song.create!(
      title: "Hive",
      description:"Doris is the debut studio album by American rapper Earl Sweatshirt. It was released on August 20, 2013, by Columbia Records, Odd Future Records and Tan Cressida Records. Doris follows his first mixtape Earl, which was released in 2010 when he was sixteen. After returning from a forced stay in a Samoan boarding school, he began working on his debut album and signed a deal with Columbia, rather than Odd Future's Odd Future Records.",
      genre:"hip-hop",
      release_date:"20/08/2013",
      user_id: earl.id,
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/earl_album1.jpg"), filename: "earl_album1.jpg"},
      song_file: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/song16.mp3"), filename: "song16.mp3"}
    )
    song17 = Song.create!(
      title: "Chum",
      description:"Doris is the debut studio album by American rapper Earl Sweatshirt. It was released on August 20, 2013, by Columbia Records, Odd Future Records and Tan Cressida Records. Doris follows his first mixtape Earl, which was released in 2010 when he was sixteen. After returning from a forced stay in a Samoan boarding school, he began working on his debut album and signed a deal with Columbia, rather than Odd Future's Odd Future Records.",
      genre:"hip-hop",
      release_date:"20/08/2013",
      user_id: earl.id,
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/earl_album1.jpg"), filename: "earl_album1.jpg"},
      song_file: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/song17.mp3"), filename: "song17.mp3"}
    )
    song18 = Song.create!(
      title: "Whoah",
      description:"Doris is the debut studio album by American rapper Earl Sweatshirt. It was released on August 20, 2013, by Columbia Records, Odd Future Records and Tan Cressida Records. Doris follows his first mixtape Earl, which was released in 2010 when he was sixteen. After returning from a forced stay in a Samoan boarding school, he began working on his debut album and signed a deal with Columbia, rather than Odd Future's Odd Future Records.",
      genre:"hip-hop",
      release_date:"20/08/2013",
      user_id: earl.id,
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/earl_album1.jpg"), filename: "earl_album1.jpg"},
      song_file: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/song18.mp3"), filename: "song18.mp3"}
    )
    song19 = Song.create!(
      title: "Hoarse",
      description:"Doris is the debut studio album by American rapper Earl Sweatshirt. It was released on August 20, 2013, by Columbia Records, Odd Future Records and Tan Cressida Records. Doris follows his first mixtape Earl, which was released in 2010 when he was sixteen. After returning from a forced stay in a Samoan boarding school, he began working on his debut album and signed a deal with Columbia, rather than Odd Future's Odd Future Records.",
      genre:"hip-hop",
      release_date:"20/08/2013",
      user_id: earl.id,
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/earl_album1.jpg"), filename: "earl_album1.jpg"},
      song_file: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/song19.mp3"), filename: "song19.mp3"}
    )
    song20 = Song.create!(
      title: "Knight",
      description:"Doris is the debut studio album by American rapper Earl Sweatshirt. It was released on August 20, 2013, by Columbia Records, Odd Future Records and Tan Cressida Records. Doris follows his first mixtape Earl, which was released in 2010 when he was sixteen. After returning from a forced stay in a Samoan boarding school, he began working on his debut album and signed a deal with Columbia, rather than Odd Future's Odd Future Records.",
      genre:"hip-hop",
      release_date:"20/08/2013",
      user_id: earl.id,
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/earl_album1.jpg"), filename: "earl_album1.jpg"},
      song_file: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/song20.mp3"), filename: "song20.mp3"}
    )
    song21 = Song.create!(
      title: "My First Track",
      description:"Just testing this great new service SoundCrowd",
      genre:"other",
      release_date:"03/03/2019",
      user_id: louis.id,
      song_file: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/song21.mp3"), filename: "song21.mp3"}
    )
    song22 = Song.create!(
      title: "Jam Sesh",
      genre:"other",
      release_date:"03/03/2019",
      user_id: louis.id,
      song_file: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/song22.mp3"), filename: "song22.mp3"}
    )
    song23 = Song.create!(
      title: "Rough Draft",
      description:"Something I recorded today!",
      genre:"other",
      release_date:"03/03/2019",
      user_id: louis.id,
      song_file: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/song23.mp3"), filename: "song23.mp3"}
      )
    song24 = Song.create!(
      title: "Afloat",
      genre:"jazz",
      release_date:"14/02/2019",
      user_id: jacob.id,
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/jacob_album1.jpg"), filename: "jacob_album1.jpg"},
      song_file: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/song24.mp3"), filename: "song24.mp3"}
    )
    song25 = Song.create!(
      title: "Beyond the Train Tracks",
      description: "A huge thank you to Alex Chavira for doing the drawings, Antonio Martinez for taking the pictures, and Juan Casco for designing the font. Thanks so much to everyone else who inspired me to write the lyrics and supported me through the process.",
      genre:"electronic",
      release_date:"14/02/2019",
      user_id: jacob.id,
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/jacob_album1.jpg"), filename: "jacob_album1.jpg"},
      song_file: {io: open("/Users/louisleon/desktop/sound_crowd_seed_assets/song25.mp3"), filename: "song25.mp3"}
    )
    song26 = Song.create!(
      title: "Valentina",
      description: "A huge thank you to Alex Chavira for doing the drawings, Antonio Martinez for taking the pictures, and Juan Casco for designing the font. Thanks so much to everyone else who inspired me to write the lyrics and supported me through the process.",
      genre:"electronic",
      release_date:"14/02/2019",
      user_id: jacob.id,
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/jacob_album1.jpg"), filename: "jacob_album1.jpg"},
      song_file: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/song26.mp3"), filename: "song25.mp3"}
    )
    song27 = Song.create!(
      title: "By the Lake",
      description: "A huge thank you to Alex Chavira for doing the drawings, Antonio Martinez for taking the pictures, and Juan Casco for designing the font. Thanks so much to everyone else who inspired me to write the lyrics and supported me through the process.",
      genre:"electronic",
      release_date:"14/02/2019",
      user_id: jacob.id,
      image: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/jacob_album1.jpg"), filename: "jacob_album1.jpg"},
      song_file: {io: open("https://s3-us-west-1.amazonaws.com/sound-crowd-dev/song27.mp3"), filename: "song25.mp3"}
    )
  end