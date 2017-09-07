const mock_movie = {
    "results": [{
            "title": "Minions",
            "image_url": "http://image.tmdb.org/t/p/w780/uX7LXnsC7bZJZjn048UCOwkPXWJ.jpg",
            "overview": "Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill, a super-villain who, alongside her inventor husband Herb, hatches a plot to take over the world."
        },
        {
            "title": "Beauty and the Beast",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/6aUWe0GSl69wMTSWWexsorMIvwU.jpg",
            "overview": "A live-action adaptation of Disney's version of the classic 'Beauty and the Beast' tale of a cursed prince and a beautiful young woman who helps him break the spell."
        },
        {
            "title": "Spider-Man: Homecoming",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/vc8bCGjdVp0UbMNLzHnHSLRbBWQ.jpg",
            "overview": "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges."
        },
        {
            "title": "Guardians of the Galaxy Vol. 2",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/vc8bCGjdVp0UbMNLzHnHSLRbBWQ.jpg",
            "overview": "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage."
        },
        {
            "title": "Despicable Me 3",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/puV2PFq42VQPItaygizgag8jrXa.jpg",
            "overview": "Gru and his wife Lucy must stop former '80s child star Balthazar Bratt from achieving world domination."
        },
        {
            "title": "War for the Planet of the Apes",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/ulMscezy9YX0bhknvJbZoUgQxO5.jpg",
            "overview": "Caesar and his apes are forced into a deadly conflict with an army of humans led by a ruthless Colonel. After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind. As the journey finally brings them face to face, Caesar and the Colonel are pitted against each other in an epic battle that will determine the fate of both their species and the future of the planet."
        },
        {
            "title": "Annabelle: Creation",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/o8u0NyEigCEaZHBdCYTRfXR8U4i.jpg",
            "overview": "Several years after the tragic death of their little girl, a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, soon becoming the target of the dollmaker's possessed creation, Annabelle."
        },
        {
            "title": "Dunkirk",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/fudEG1VUWuOqleXv6NwCExK0VLy.jpg",
            "overview": "Miraculous evacuation of Allied soldiers from Belgium, Britain, Canada, and France, who were cut off and surrounded by the German army from the beaches and harbor of Dunkirk, France, between May 26 and June 04, 1940, during Battle of France in World War II."
        },
        {
            "title": "Deadpool",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/n1y094tVDFATSzkTnFxoGZ1qNsG.jpg",
            "overview": "Deadpool tells the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life."
        },
        {
            "title": "Guardians of the Galaxy",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/bHarw8xrmQeqf3t8HpuMY7zoK4x.jpg",
            "overview": "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser."
        },
        {
            "title": "Logan",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/5pAGnkFYSsFJ99ZxDIYnhQbQFXs.jpg",
            "overview": "In the near future, a weary Logan cares for an ailing Professor X in a hideout on the Mexican border. But Logan's attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces."
        },
        {
            "title": "Dawn of the Planet of the Apes",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/rjUl3pd1LHVOVfG4IGcyA1cId5l.jpg",
            "overview": "A group of scientists in San Francisco struggle to stay alive in the aftermath of a plague that is wiping out humanity, while Caesar tries to maintain dominance over his community of intelligent apes."
        },
        {
            "title": "Jurassic World",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/dkMD5qlogeRMiEixC4YNPUvax2T.jpg",
            "overview": "Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond."
        },
        {
            "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/8AUQ7YlJJA9C8kWk8P4YNHIcFDE.jpg",
            "overview": "Jack Sparrow, a freewheeling 17th-century pirate who roams the Caribbean Sea, butts heads with a rival pirate bent on pillaging the village of Port Royal. When the governor's daughter is kidnapped, Sparrow decides to help the girl's love save her. But their seafaring mission is hardly simple."
        },
        {
            "title": "Mad Max: Fury Road",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/phszHPFVhPHhMZgo0fWTKBDQsJA.jpg",
            "overview": "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland."
        },
        {
            "title": "Ghost in the Shell",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/jGPSVArC0GS2VVc0aGAqGTjfFOG.jpg",
            "overview": "In the near future, Major is the first of her kind: a human saved from a terrible crash, then cyber-enhanced to be a perfect soldier devoted to stopping the world's most dangerous criminals."
        },
        {
            "title": "Interstellar",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
            "overview": "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage."
        },
        {
            "title": "The Lord of the Rings: The Fellowship of the Ring",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/pIUvQ9Ed35wlWhY2oU6OmwEsmzG.jpg",
            "overview": "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed."
        },
        {
            "title": "Ant-Man",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/kvXLZqY0Ngl1XSw7EaMQO0C1CCj.jpg",
            "overview": "Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner-hero and help his mentor, Doctor Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world."
        },
        {
            "title": "Toilet - Ek Prem Katha",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/5FqE5tttmO2T1IxG5RXZXrpEoZM.jpg",
            "overview": "Keshav and Jaya are from two villages near Mathura, where at least 80% of households are without any access to a lavatories. Conflict comes knocking on the first day of their marriage, when Jaya leaves Keshav's house for good, after discovering that there is no toilet in the home. Distraught and desperate, Keshav sets out on mission to win back his love- by battling against the age old traditions, mind-set and value system of his country."
        },
        {
            "title": "X-Men: Days of Future Past",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/5kYj5EOQMFBFCdnk4X8KaFUfDVR.jpg",
            "overview": "The ultimate X-Men ensemble fights a war for the survival of the species across two time periods as they join forces with their younger selves in an epic battle that must change the past – to save our future."
        },
        {
            "title": "Pirates of the Caribbean: At World's End",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/8ZgpAftUiYTU76IhUADITa3Ur9n.jpg",
            "overview": "Captain Barbossa, long believed to be dead, has come back to life and is headed to the edge of the Earth with Will Turner and Elizabeth Swann. But nothing is quite as it seems."
        },
        {
            "title": "Avatar",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/xSxlmtLz2NYtO07N4WexY1y53pl.jpg",
            "overview": "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization."
        },
        {
            "title": "Frozen",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/cAhCDpAq80QCeQvHytY9JkBalpH.jpg",
            "overview": "Young princess Anna of Arendelle dreams about finding true love at her sister Elsa’s coronation. Fate takes her on a dangerous journey in an attempt to end the eternal winter that has fallen over the kingdom. She's accompanied by ice delivery man Kristoff, his reindeer Sven, and snowman Olaf. On an adventure where she will find out what friendship, courage, family, and true love really means."
        },
        {
            "title": "Chappie",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/y5lG7TBpeOMG0jxAaTK0ghZSzBJ.jpg",
            "overview": "Every child comes into the world full of promise, and none more so than Chappie: he is gifted, special, a prodigy. Like any child, Chappie will come under the influence of his surroundings—some good, some bad—and he will rely on his heart and soul to find his way in the world and become his own man. But there's one thing that makes Chappie different from any one else: he is a robot."
        },
        {
            "title": "Titanic",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/fVcZErSWa7gyENuj8IWp8eAfCnL.jpg",
            "overview": "84 years later, a 101-year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert, Brock Lovett, Lewis Bodine, Bobby Buell and Anatoly Mikailavich on the Keldysh about her life set in April 10th 1912, on a ship called Titanic when young Rose boards the departing ship with the upper-class passengers and her mother, Ruth DeWitt Bukater, and her fiancé, Caledon Hockley. Meanwhile, a drifter and artist named Jack Dawson and his best friend Fabrizio De Rossi win third-class tickets to the ship in a game. And she explains the whole story from departure until the death of Titanic on its first and last voyage April 15th, 1912 at 2:20 in the morning."

        },
        {
            "title": "Valerian and the City of a Thousand Planets",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/o6OhxtsgMurL4h68Uqei0aSPMNr.jpg",
            "overview": "In the 28th century, Valerian and Laureline are special operatives charged with keeping order throughout the human territories. On assignment from the Minister of Defense, the two undertake a mission to Alpha, an ever-expanding metropolis where species from across the universe have converged over centuries to share knowledge, intelligence, and cultures. At the center of Alpha is a mysterious dark force which threatens the peaceful existence of the City of a Thousand Planets, and Valerian and Laureline must race to identify the menace and safeguard not just Alpha, but the future of the universe."
        },
        {
            "title": "Starship Troopers: Traitor of Mars",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/27nKWPZFGcCDWYJkCwrJOzjD26q.jpg",
            "overview": "Federation trooper Johnny Rico is ordered to work with a group of new recruits on a satellite station on Mars, where giant bugs have decided to target their next attack."
        },
        {
            "title": "The Maze Runner",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/lkOZcsXcOLZYeJ2YxJd3vSldvU4.jpg",
            "overview": "Set in a post-apocalyptic world, young Thomas is deposited in a community of boys after his memory is erased, soon learning they're all trapped in a maze that will require him to join forces with fellow \"runners\" for a shot at escape."
        },
        {
            "title": "Harry Potter and the Chamber of Secrets",
            "backdrop_path": "http://image.tmdb.org/t/p/w780/avqzwKn89VetTEvAlBePt3Us6Al.jpg",
            "overview": "Ignoring threats to his life, Harry returns to Hogwarts to investigate – aided by Ron and Hermione – a mysterious series of attacks."
        }
    ]
}

module.exports = mock_movie