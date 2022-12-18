import harry from '../img/action.jpg'
import comedy from '../img/comedy.jpg'
import thriller from '../img/thriller.jpg';
import drama from '../img/drama.jpg';
const USER = {
    "uid": "SG86a2mFHeb1H0GJXzdLXO6ogCi1",
    "email": "vincent.ferrigan@gmail.com",
    "emailVerified": false,
    "displayName": "Vincent Ferrigan",
    "isAnonymous": false,
    "providerData": [
    {
        "providerId": "password",
        "uid": "vincent.ferrigan@gmail.com",
        "displayName": "Vincent Ferrigan",
        "email": "vincent.ferrigan@gmail.com",
        "phoneNumber": null,
        "photoURL": null
    }
],
    "stsTokenManager": {
    "refreshToken": "AOkPPWSmCsglMSU8lU5bYTBs5tMy2THj2rAHJvcgN2Hn6YWk4PYuOeDPGO2rkh_11r_ewe-ohBbgDQF0HQUpKF-jUU4Z1my4zYMHg3IcrB2Z3A144pVn42rzs-HY1A8KIaNmRTR24MT_H5fI742b7mCNiTL7tlJ0xRaTyn9UNTQB_KmfLDumN63DbjHCvwTBoSCQiI2VF7P96gCwIGUvbNomGrU6labr2ngVt1ZRf3G7dJU--0ZS53U",
        "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OGI1NmM2NmVhYmIwZDlhNmJhOGNhMzMwMTU2NGEyMzhlYWZjODciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiVmluY2VudCBGZXJyaWdhbiIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9jaW5lbWFwcC0zMGExZCIsImF1ZCI6ImNpbmVtYXBwLTMwYTFkIiwiYXV0aF90aW1lIjoxNjcwNDIzNzE5LCJ1c2VyX2lkIjoiU0c4NmEybUZIZWIxSDBHSlh6ZExYTzZvZ0NpMSIsInN1YiI6IlNHODZhMm1GSGViMUgwR0pYemRMWE82b2dDaTEiLCJpYXQiOjE2NzEwMjE1MTQsImV4cCI6MTY3MTAyNTExNCwiZW1haWwiOiJ2aW5jZW50LmZlcnJpZ2FuQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ2aW5jZW50LmZlcnJpZ2FuQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.PDO17Zhhrnlc-kSFPKsBHC_I-zxgda1MNxBuGLYLGRW1N4hrTPv00GNH5VsLVONC7OJlntZ7BDAYJTt4HexnmPuIdfuydJKoidO8Q_GnOrczTUnF10yGJsUylS6aCvLfrypHYnOzzRkL8DPkYEEKS3tKSiGI5HH7oCWSSle1HiU-vBRvZtT3mWNwbLXkI9iycPoHi4xhYJNNCuQ-rMsKAlt11hQpykTgJ9V7Jh5dOXYB-OmDHkes2_l5cz09Tjgtm-acUCPWwazhJ6cijfbCqo7q2zgWz18BGNOEHS_zfMS6Ptjpax-snCuUrI1NMFkW_svPOfND5-5X8eTfEFF6gw",
        "expirationTime": 1671025114107
},
    "createdAt": "1670417751241",
    "lastLoginAt": "1670943475657",
    "apiKey": "AIzaSyADEcv-zWou4Neiegvx7H3YTA5AI9GR6q4",
    "appName": "[DEFAULT]"
}
/*
const GENRE = ["","action", "adventure", "animation", "biography", "comedy", "crime", "documentary", "drama", "family", "fantasy",
    "film-noir", "history", "horror", "music", "musical", "mystery", "news", "reality-tv", "romance",
    "sci-fi", "short", "sport", "talk-show", "thriller", "war", "western",];
*/
const GENRE = [{name:"action", quote:"Feeling lucky, punk?", img: harry},{name:"comedy", quote:"Hey, you wanna hear the most annoying sound in the world?", img: comedy},
    {name:"drama", quote:"We'll always have Paris.", img: drama},{name:"thriller", quote:"A census taker once tried to test me. I ate his liver with a nice chianti.", img: thriller},]

const QUOTE3 = {
        "id": "/title/tt0073195/",
        "base": {
            "@type": "imdb.api.title.base",
            "id": "/title/tt0073195/",
            "image": {
                "height": 1535,
                "id": "/title/tt0073195/images/rm1449540864",
                "url": "https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
                "width": 1000
            },
            "title": "Jaws",
            "titleType": "movie",
            "year": 1975
        },
        "quotes": [
            {
                "id": "/title/tt0073195/quotes/qt0457091",
                "interestingVotes": {
                    "down": 8,
                    "up": 258
                },
                "lines": [
                    {
                        "stageDirection": "the three men are comparing their scars"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "What's that one?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "What?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "That one, there, on your arm."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Oh, uh, that's a tattoo, I got that removed."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Don't tell me, don't tell me...\"Mother.\""
                    },
                    {
                        "stageDirection": "he roars with laughter"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "What is it..."
                    },
                    {
                        "stageDirection": "Quint solemnly clamps a hand on Hooper's arm"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Mr. Hooper, that's the USS Indianapolis."
                    },
                    {
                        "stageDirection": "Hooper immediately stops laughing"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "You were on the Indianapolis?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "What happened?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Japanese submarine slammed two torpedoes into our side, Chief. We was comin' back from the island of Tinian to Leyte, just delivered the bomb. The Hiroshima bomb. Eleven hundred men went into the water. Vessel went down in twelve minutes. Didn't see the first shark for about a half an hour. Tiger. Thirteen-footer. You know how you know that when you're in the water, Chief? You tell by lookin' from the dorsal to the tail. What we didn't know... was our bomb mission had been so secret, no distress signal had been sent. Heh."
                    },
                    {
                        "stageDirection": "he pauses and takes a drink"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "They didn't even list us overdue for a week. Very first light, Chief, sharks come cruisin'. So we formed ourselves into tight groups. Y'know, it's... kinda like ol' squares in a battle like, uh, you see in a calendar, like the Battle of Waterloo, and the idea was, shark comes to the nearest man and that man, he'd start poundin' and hollerin' and screamin', and sometimes the shark'd go away... sometimes he wouldn't go away. Sometimes that shark, he looks right into ya. Right into your eyes. Y'know the thing about a shark, he's got... lifeless eyes, black eyes, like a doll's eyes. When he comes at ya, doesn't seem to be livin'... until he bites ya. And those black eyes roll over white, and then... oh, then you hear that terrible high-pitch screamin', the ocean turns red, and spite of all the poundin' and the hollerin', they all come in and they... rip you to pieces."
                    },
                    {
                        "stageDirection": "he pauses"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Y'know, by the end of that first dawn... lost a hundred men. I dunno how many sharks. Maybe a thousand. I dunno how many men, they averaged six an hour. On Thursday mornin', Chief, I bumped into a friend of mine, Herbie Robinson from Cleveland- baseball player, boatswain's mate. I thought he was asleep, reached over to wake him up... bobbed up and down in the water just like a kinda top. Upended. Well... he'd been bitten in half below the waist. Noon the fifth day, Mr. Hooper, a Lockheed Ventura saw us, he swung in low and he saw us. Young pilot, a lot younger than Mr. Hooper. Anyway, he saw us and come in low and three hours later, a big fat PBY comes down and start to pick us up. Y'know, that was the time I was most frightened, waitin' for my turn. I'll never put on a life jacket again. So, eleven hundred men went into the water, three hundred sixteen men come out, and the sharks took the rest, June the 29th, 1945."
                    },
                    {
                        "stageDirection": "he pauses, smiles, and raises his glass"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Anyway... we delivered the bomb."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457120",
                "interestingVotes": {
                    "down": 4,
                    "up": 128
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Smile, you son of a BITCH!"
                    },
                    {
                        "stageDirection": "shoots at the air tank; the shark explodes"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457126",
                "interestingVotes": {
                    "down": 2,
                    "up": 90
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "That's some bad hat, Harry."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457119",
                "interestingVotes": {
                    "up": 35
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "\"Slow ahead.\" I can go slow ahead. Come on down here and chum some of this shit."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457124",
                "interestingVotes": {
                    "down": 2,
                    "up": 63
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "text": "Martin hates boats. Martin hates water. Martin... Martin sits in his car when we go on the ferry to the mainland. I guess it's a childhood thing. It's a... there's a clinical name for it isn't there?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Drowning."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457087",
                "interestingVotes": {
                    "down": 2,
                    "up": 60
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "Quint first scratches the chalk board to get everyone's attention",
                        "text": "Y'all know me. Know how I earn a livin'. I'll catch this bird for you, but it ain't gonna be easy. Bad fish. Not like going down the pond chasin' bluegills and tommycods. This shark, swallow you whole. Little shakin', little tenderizin', an' down you go. And we gotta do it quick, that'll bring back your tourists, put all your businesses on a payin' basis. But it's not gonna be pleasant. I value my neck a lot more than three thousand bucks, chief. I'll find him for three, but I'll catch him, and kill him, for ten. But you've gotta make up your minds. If you want to stay alive, then ante up. If you want to play it cheap, be on welfare the whole winter. I don't want no volunteers, I don't want no mates, there's just too many captains on this island. $10,000 for me by myself. For that you get the head, the tail, the whole damn thing."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt3009593",
                "interestingVotes": {
                    "up": 31
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "to Quint after getting his first good look at the great white shark up close while chumming",
                        "text": "You're gonna need a bigger boat."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457101",
                "interestingVotes": {
                    "down": 3,
                    "up": 70
                },
                "lines": [
                    {
                        "stageDirection": "last lines"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "What day is this?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "It's Wednesday... eh, it's Tuesday, I think."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Think the tide's with us?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Keep kicking."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "I used to hate the water..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "I can't imagine why."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457117",
                "interestingVotes": {
                    "down": 5,
                    "up": 90
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Here lies the body of Mary Lee; died at the age of a hundred and three. For fifteen years she kept her virginity; not a bad record for this vicinity."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457122",
                "interestingVotes": {
                    "down": 3,
                    "up": 67
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "seeing Hooper's equipment",
                        "text": "What are you? Some kind of half-assed astronaut?"
                    },
                    {
                        "stageDirection": "examining the shark cage"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Jesus H Christ, when I was a boy, every little squirt wanted to be a harpooner or a sword fisherman. What d'ya have there - a portable shower or a monkey cage?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Anti-Shark cage."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Anti-shark cage. You go inside the cage?"
                    },
                    {
                        "stageDirection": "Hooper nods"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Cage goes in the water, you go in the water. Shark's in the water. Our shark."
                    },
                    {
                        "stageDirection": "sings"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Farewell and adieu to you, fair Spanish ladies. Farewell and adieu, you ladies of Spain. For we've received orders for to sail back to Boston. And so nevermore shall we see you again."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457153",
                "interestingVotes": {
                    "up": 28
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Mrs. Kintner",
                                "characterId": "/character/ch0002882/",
                                "nameId": "/name/nm0276444/"
                            }
                        ],
                        "text": "Chief Brody?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Yes?"
                    },
                    {
                        "stageDirection": "Mrs. Kintner slaps Brody and sobs"
                    },
                    {
                        "characters": [
                            {
                                "character": "Mrs. Kintner",
                                "characterId": "/character/ch0002882/",
                                "nameId": "/name/nm0276444/"
                            }
                        ],
                        "text": "I just found out, that a girl got killed here last week, and you knew it! You knew there was a shark out there! You knew it was dangerous! But you let people go swimming anyway? You knew all those things! But still my boy is dead now. And there's nothing you can do about it. My boy is dead. I wanted you to know that."
                    },
                    {
                        "stageDirection": "Mrs. Kintner walks away"
                    },
                    {
                        "characters": [
                            {
                                "character": "Mayor Vaughn",
                                "characterId": "/character/ch0002874/",
                                "nameId": "/name/nm0358069/"
                            }
                        ],
                        "text": "I'm sorry, Martin. She's wrong."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "No, she's not."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0549071",
                "interestingVotes": {
                    "up": 28
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "singing",
                        "text": "Farewell and adieu to you fair Spanish ladies. Farewell and adieu to you ladies of Spain. For we've received orders for to sail back to Boston. And so never more shall we see you again."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457086",
                "interestingVotes": {
                    "up": 26
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "I'm not going to waste my time arguing with a man who's lining up to be a hot lunch."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457116",
                "interestingVotes": {
                    "down": 2,
                    "up": 50
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Here's to swimmin' with bow-legged women."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457089",
                "interestingVotes": {
                    "up": 21
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Mayor Vaughn",
                                "characterId": "/character/ch0002874/",
                                "nameId": "/name/nm0358069/"
                            }
                        ],
                        "text": "Fellows, let's be reasonable, huh? This is not the time or the place to perform some kind of a half-assed autopsy on a fish... And I'm not going to stand here and see that thing cut open and see that little Kintner boy spill out all over the dock."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457110",
                "interestingVotes": {
                    "up": 21
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "This was no boat accident."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457095",
                "interestingVotes": {
                    "up": 19
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Is it true that most people get attacked by sharks in three feet of water about ten feet from the beach?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Yeah."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "And that... and that before people started to swim for recreation - I mean before sharks knew what they were missing - that a lot of these attacks weren't reported?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "That's right."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Now this shark that... that... that swims alone..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Rogue."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "What's it called?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            },
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "together",
                        "text": "Rogue."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Rogue, yeah. Now this guy, he... he keeps swimmin' around in a place where the feeding is good until the food supply is gone, right?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "It's called \"territoriality\". It's just a theory that I happen to... agree with."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Then why don't we have one more drink and go down and cut that shark open?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "text": "Martin? Can you do that?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "I can do anything; I'm the chief of police."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457108",
                "interestingVotes": {
                    "up": 19
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Ha, ha - they're all gonna die."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457147",
                "interestingVotes": {
                    "up": 19
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "singing",
                        "text": "Show me the way to go home / I'm tired and I want to go to bed..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            },
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            },
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "all singing together",
                        "text": "I had a little drink about an hour ago and it got right to my head / Wherever I may roam / by land or sea or foam..."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457113",
                "interestingVotes": {
                    "down": 1,
                    "up": 28
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "It doesn't make any sense when you pay a guy like you to watch sharks."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Well, uh, it doesn't make much sense for a guy who hates the water to live on an island either."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "It's only an island if you look at it from the water."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "That makes a lot of sense."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457157",
                "interestingVotes": {
                    "up": 17
                },
                "lines": [
                    {
                        "stageDirection": "Brody sees his son sitting in a small skiff, and yells for him to get out of it"
                    },
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "text": "Martin, it's his birthday tomorrow!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "I don't want him on the ocean!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "text": "He's not on the ocean, he is in a boat! He's not gonna go in the water! I don't think he'll ever go in the water again after what happened yesterday."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "All right, now don't say that. I don't want that to happen, you know that. But I want him to read the boating regulations, the rules, y'know, before he goes out on his own."
                    },
                    {
                        "stageDirection": "while he talks, Ellen flips through the book on sharks he has been reading, and sees an old painting of a shark ramming a hole into the bottom of rowboat's hull"
                    },
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "stageDirection": "slams the book shut",
                        "text": "Michael! Did you hear your father? Out of the water now! NOW!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457118",
                "interestingVotes": {
                    "up": 16
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Back home we got a taxidermy man. He gonna have a heart attack when he see what I brung him."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457109",
                "interestingVotes": {
                    "down": 1,
                    "up": 24
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "That's a twenty footer."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Twenty-five. Three tons of him."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457142",
                "interestingVotes": {
                    "up": 15
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Boys, oh boys... I think he's come back for his noon feeding."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457148",
                "interestingVotes": {
                    "up": 15
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "trying to get the fishing line secure",
                        "text": "It may be a marlin or a stingray... but it's definitely a game fish."
                    },
                    {
                        "stageDirection": "Hooper pulls as the lines snaps and he crashes his head into the wall"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "picking up the line",
                        "text": "Gamin' fish, eh? Marlin? Stingray? Bit through this piano wire? Don't you tell me my business again! You get back on the bridge..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Quint, that doesn't prove a damn thing!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Well it proves one thing, Mr. Hooper. It proves that you wealthy college boys don't have the education enough to admit when you're wrong."
                    },
                    {
                        "stageDirection": "Quint enters the cabin as Hooper makes faces at him"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "following Quint inside the boat",
                        "text": "What's the point? Hooks and lines..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "slams on the roof at Hooper",
                        "text": "Hooper! 12 minutes south south east now, full throttle!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "Mocking Pirate Voice",
                        "text": "Aye, aye, sir! AYE JIMBOY ARAGHHH!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "to Brody",
                        "text": "See what I do, Chief, is I trick 'em to the surface. And I jab at 'em. I'm not gonna haul 'em up like a lot of catfish."
                    },
                    {
                        "stageDirection": "slams on the roof"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Hooper, full throttle!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "voice imitating W. C. Fields",
                        "text": "I don't have to take this abuse much longer!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457090",
                "interestingVotes": {
                    "down": 2,
                    "up": 29
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Mayor Vaughn",
                                "characterId": "/character/ch0002874/",
                                "nameId": "/name/nm0358069/"
                            }
                        ],
                        "text": "Martin, it's all psychological. You yell barracuda, everybody says, \"Huh? What?\" You yell shark, we've got a panic on our hands on the Fourth of July."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457094",
                "interestingVotes": {
                    "down": 2,
                    "up": 29
                },
                "lines": [
                    {
                        "stageDirection": "Hooper is examining the remains of the first victim, describing the post-mortem into his tape recorder"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "The height and weight of the victim can only be estimated from the partial remains..."
                    },
                    {
                        "stageDirection": "He lifts the sheet covering the remains, inhales sharply, then regains his composure"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "The torso has been severed in mid-thorax; there are no major organs remaining... May I have a glass of water, please?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Medical Examiner",
                                "nameId": "/name/nm0627495/"
                            }
                        ],
                        "text": "Sure."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Right arm has been severed above the elbow with massive tissue loss in the upper musculature."
                    },
                    {
                        "stageDirection": "takes water"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Thank you very much."
                    },
                    {
                        "stageDirection": "sips the water and continues"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Partially denuded bone remaining..."
                    },
                    {
                        "stageDirection": "to the M.E"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "This was no boating accident."
                    },
                    {
                        "stageDirection": "to Brody"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Did you notify the Coast Guard about this?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "No. It was only local jurisdiction."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "continues post-mortem",
                        "text": "The left arm, head, shoulders, sternum and portions of the rib cage are intact..."
                    },
                    {
                        "stageDirection": "Brody begins to light a cigarette"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Do not smoke in here, thank you very much!"
                    },
                    {
                        "stageDirection": "lifts up the severed arm"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "This is what happens. It indicates the non-frenzied feeding of a large squalus - possibly Longimanus or Isurus glauca. Now the enormous amount of tissue loss prevents any detailed analysis; however the attacking squalus must be considerably larger than any normal squalus found in these waters."
                    },
                    {
                        "stageDirection": "pulls off his glasses"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Didn't you get on a boat and check out these waters?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "No."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Well, this is not a boat accident! It wasn't any propeller, it wasn't any coral reef, and it wasn't Jack the Ripper!"
                    },
                    {
                        "stageDirection": "splashes water on his face and takes a deep breath"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "It was a shark."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457141",
                "interestingVotes": {
                    "up": 13
                },
                "lines": [
                    {
                        "stageDirection": "about to go looking for the shark"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "On the water?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Well, if we're looking for a shark we're not gonna find him on the land."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457149",
                "interestingVotes": {
                    "up": 13
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Hooper, what exactly can you do with these things of yours?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Well, I think I can pump 20 cc's of strychnine nitrate into him, if I can get close enough."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Can you get this little needle through his skin?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "No, I can't do that. But if I can get him close enough to this cage, I think that I can get him in the mouth or the eye..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "That shark will rip that cage to pieces!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "shouting",
                        "text": "YOU GOT ANY BETTER SUGGESTIONS?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt1497268",
                "interestingVotes": {
                    "up": 13
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "text": "What am I going to tell the kids?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Tell them I'm going fishing."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457106",
                "interestingVotes": {
                    "up": 12
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "motioning to Brody to get closer to the barrels",
                        "text": "Come on Martin! Move, move, move!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "I'm not going out there!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Beyond the edge of the barrels, go to the end of the barrels! Further out!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "What?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Further out!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Why?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Go further out!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "What for?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Will you go to the end of the pulpit, please?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "What?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Will you just please go to the end of the pulpit!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "What for?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "I need to have something in the foreground to give it some scale."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Foreground, my ass!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457115",
                "interestingVotes": {
                    "down": 1,
                    "up": 18
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Mayor Vaughn",
                                "characterId": "/character/ch0002874/",
                                "nameId": "/name/nm0358069/"
                            }
                        ],
                        "text": "I don't think either of one you are familiar with our problems."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "I think that I am familiar with the fact that you are going to ignore this particular problem until it swims up and BITES YOU ON THE ASS!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457096",
                "interestingVotes": {
                    "up": 11
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Ben Gardner",
                                "characterId": "/character/ch0002883/",
                                "nameId": "/name/nm0455475/"
                            }
                        ],
                        "text": "When we get them silly bastards down in that rock pile, it'll be some fun, they'll wish their fathers had never met their mothers. When they start takin' their bottoms out and slamming into them rocks, boy! Get away from there, ya goddamn fool, you! What's the matter with you? You wanna swamp us, ya crazy son of a bitch?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457129",
                "interestingVotes": {
                    "up": 11
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Mayor Vaughn",
                                "characterId": "/character/ch0002874/",
                                "nameId": "/name/nm0358069/"
                            }
                        ],
                        "text": "Any special questions?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Denherder",
                                "characterId": "/character/ch0002890/",
                                "nameId": "/name/nm0150019/"
                            }
                        ],
                        "text": "Uh, is that $3000 bounty on the shark in cash or check?"
                    },
                    {
                        "stageDirection": "the townspeople laugh"
                    },
                    {
                        "characters": [
                            {
                                "character": "Mrs. Taft",
                                "characterId": "/character/ch0002886/",
                                "nameId": "/name/nm0183914/"
                            }
                        ],
                        "text": "I don't think that's funny. I don't think that's funny at all, I'm sorry."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457139",
                "interestingVotes": {
                    "up": 11
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Yeah, but I'm not drunk enough to go out on a boat."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Yes, you are."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "No, I'm not."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Yes, you are."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "I can't do that."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Yes, you can."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457156",
                "interestingVotes": {
                    "down": 1,
                    "up": 16
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Mr. Vaughn, what we are dealing with here is a perfect engine, an eating machine. It's really a miracle of evolution. All this machine does is swim and eat and make little sharks, and that's all. Now, why don't you take a long, close look at this sign."
                    },
                    {
                        "stageDirection": "refers to the graffitied billboard"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Those proportions are correct."
                    },
                    {
                        "characters": [
                            {
                                "character": "Mayor Vaughn",
                                "characterId": "/character/ch0002874/",
                                "nameId": "/name/nm0358069/"
                            }
                        ],
                        "text": "Love to prove that, wouldn't ya? Get your name into the National Geographic."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457121",
                "interestingVotes": {
                    "up": 10
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Mayor Vaughn",
                                "characterId": "/character/ch0002874/",
                                "nameId": "/name/nm0358069/"
                            }
                        ],
                        "stageDirection": "to reporter",
                        "text": "I'm pleased and happy to repeat the news that we have, in fact, caught and killed a large predator that supposedly injured some bathers. But, as you see, it's a beautiful day, the beaches are open and people are having a wonderful time. Amity, as you know, means \"friendship\"."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457123",
                "interestingVotes": {
                    "up": 10
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Front, bow. Back, stern. If ya don't get it right, squirt, I throw your ass out the little round window on the side."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457133",
                "interestingVotes": {
                    "up": 10
                },
                "lines": [
                    {
                        "stageDirection": "as Brody sends the air tanks flying"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Dammit, Martin! This is compressed air!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Well, what the hell kind of a knot was that?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "You pulled the wrong one. You screw around with these tanks, and they're gonna blow up!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Yeah, that's real fine expensive gear you brought out here, Mr. Hooper. 'Course I don't know what that bastard shark's gonna do with it, might eat it I suppose. Seen one eat a rockin' chair one time. Hey chieffy, next time you just ask me which line to pull, right?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457137",
                "interestingVotes": {
                    "up": 10
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "On radio",
                        "text": "Your husband's all right, Mrs. Brody. He's fishing. He's just caught a couple of stripers. We'll bring 'em in for dinner. We won't be long, we haven't seen anything yet. Over and out."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457146",
                "interestingVotes": {
                    "down": 1,
                    "up": 15
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "points to a scar on chest",
                        "text": "Mary Ellen Moffat. She broke my heart."
                    },
                    {
                        "stageDirection": "Hooper, Brody and Quint all laugh"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457145",
                "interestingVotes": {
                    "down": 1,
                    "up": 14
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "You wanna drink? Drink to your leg."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "I'll drink to your leg."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Okay, so we drink to our legs!"
                    },
                    {
                        "stageDirection": "both laugh"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457099",
                "interestingVotes": {
                    "up": 9
                },
                "lines": [
                    {
                        "stageDirection": "first lines"
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Cassidy",
                                "characterId": "/character/ch0175511/",
                                "nameId": "/name/nm0277204/"
                            }
                        ],
                        "text": "What's your name again?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Christine 'Chrissie' Watkins",
                                "characterId": "/character/ch0002879/",
                                "nameId": "/name/nm0045681/"
                            }
                        ],
                        "text": "Chrissie."
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Cassidy",
                                "characterId": "/character/ch0175511/",
                                "nameId": "/name/nm0277204/"
                            }
                        ],
                        "text": "Where are we going?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Christine 'Chrissie' Watkins",
                                "characterId": "/character/ch0002879/",
                                "nameId": "/name/nm0045681/"
                            }
                        ],
                        "text": "Swimming!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457111",
                "interestingVotes": {
                    "up": 9
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "You have city hands, Mr. Hooper. You been countin' money all your life."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "All right, all right! Hey, I don't need this... I don't need this working-class-hero crap!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457140",
                "interestingVotes": {
                    "down": 1,
                    "up": 13
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "text": "Wanna get drunk and fool around?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Oh Yeah."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457104",
                "interestingVotes": {
                    "up": 8
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "trying to hurry Brody into the boat",
                        "text": "Come on Chief, this isn't no boy scout picnic. See ya' got ya' rubbers!"
                    },
                    {
                        "stageDirection": "Quint laughs wildly"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457105",
                "interestingVotes": {
                    "up": 8
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "talking Brody through making knots",
                        "text": "Little brown eel comes out of the cave... Swims into the hole... Comes out of the hole... Goes back into the cave again... It's not too good is it Chief?"
                    },
                    {
                        "stageDirection": "Refering to Brody's messed up knot"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457155",
                "interestingVotes": {
                    "up": 8
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "to Mayor Vaughn, after the shark attack on July Fourth",
                        "text": "Larry, the summer is over. You're the mayor of \"shark city\". These people think you want the beaches open."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457143",
                "interestingVotes": {
                    "down": 1,
                    "up": 12
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "as he spots Hooper sitting on the deck playing solitaire",
                        "text": "Stop playin' with yourself, Hooper."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457102",
                "interestingVotes": {
                    "up": 7
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Mayor Vaughn",
                                "characterId": "/character/ch0002874/",
                                "nameId": "/name/nm0358069/"
                            }
                        ],
                        "text": "And what did you say the name of this shark is?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "It's a carcaradon carcharias. It's a Great White"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457130",
                "interestingVotes": {
                    "up": 7
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Ah. Just like I thought... He came up with the Gulf Stream - from southern waters."
                    },
                    {
                        "stageDirection": "he pulls a Louisiana license plate from the shark. Brody examines it"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "He didn't eat a car, did he?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Naw, a tiger shark's like a garbage can, it'll eat anything. Someone probably threw that in a river."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457132",
                "interestingVotes": {
                    "up": 7
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "Poking fun at Brody",
                        "text": "Ah, the missus, Chief. If they don't like you going out, they'll love you comin' in."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457135",
                "interestingVotes": {
                    "up": 7
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Mayor Vaughn",
                                "characterId": "/character/ch0002874/",
                                "nameId": "/name/nm0358069/"
                            }
                        ],
                        "text": "I'm only trying to say that Amity is a summer town. We need summer dollars. Now, if the people can't swim here, they'll be glad to swim at the beaches of Cape Cod, the Hamptons, Long Island..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "That doesn't mean we have to serve them up as smörgåsbord!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457154",
                "interestingVotes": {
                    "up": 7
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "I'm not talkin' 'bout pleasure boatin' or day sailin'. I'm talkin' 'bout workin' for a livin'. I'm talkin' 'bout sharkin'!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt1012949",
                "interestingVotes": {
                    "up": 7
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "text": "I just want to know one thing - when do I get to become an islander?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Mrs. Taft",
                                "characterId": "/character/ch0002886/",
                                "nameId": "/name/nm0183914/"
                            }
                        ],
                        "text": "Ellen, never, never! You're not born here, you're not an islander, that's it."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt2811354",
                "interestingVotes": {
                    "up": 7
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "on board the Orca",
                        "text": "Goddamn women today, they can't handle nothin'. Young girls just ain't quite smart... like their grandmothers were!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "stageDirection": "on the dock",
                        "text": "Gotta be Quint."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Colorful, isn't he?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457150",
                "interestingVotes": {
                    "down": 1,
                    "up": 10
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "text": "You see the kids?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "looking out the window",
                        "text": "They must be in the back yard."
                    },
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "text": "In Amity, you say \"yahd\"."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "starting out of the bedroom, speaking with a bad New-England accent",
                        "text": "They're in the \"yahd\", not too \"fah\" from the \"cah\"."
                    },
                    {
                        "stageDirection": "looks back at Ellen"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "How's that?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "text": "Like you're from New York."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457136",
                "interestingVotes": {
                    "up": 6
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hendricks",
                                "characterId": "/character/ch0175509/",
                                "nameId": "/name/nm0469552/"
                            }
                        ],
                        "text": "So then Denherder and Charlie sat there trying to catch their breath - and to figure out how to tell Charlie's wife what happened to her freezer full of meat."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "That's not funny. That's not funny at all."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457144",
                "interestingVotes": {
                    "up": 6
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "referring to a cut on Brody's head",
                        "text": "Chief... don't you worry about it, Chief. It won't be permanent. Wanna see somethin' permanent, boom-boom-boom?"
                    },
                    {
                        "stageDirection": "Quint pulls out a false front tooth and laughs"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Hey, Hoop, you wanna feel somethin' permanent? You just put your hand underneath my cap... and you just feel that little lump. Knock an ole un, St. Paddy's day, Boston."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "I got that beat."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "to Brody",
                        "text": "I got that beat."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0560050",
                "interestingVotes": {
                    "up": 6
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "to Brody",
                        "text": "'Scuse me. You know those eight guys in the fantail launch out there? Well, none of 'em are gonna get out of the harbor alive."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457114",
                "interestingVotes": {
                    "down": 1,
                    "up": 9
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "stageDirection": "upon meeting Matt Hooper",
                        "text": "My husband tells me you're in sharks."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt3063262",
                "interestingVotes": {
                    "down": 1,
                    "up": 9
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Out of Towner",
                                "nameId": "/name/nm0025702/"
                            }
                        ],
                        "text": "Yeah, well, but what kind? What kind of shark?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "With a pencil in his mouth",
                        "text": "It's a tiger shark."
                    },
                    {
                        "stageDirection": "Three Out of Towners turn slowly to face Hooper"
                    },
                    {
                        "characters": [
                            {
                                "character": "Out of Towner",
                                "nameId": "/name/nm0025702/"
                            }
                        ],
                        "text": "A what?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt3521759",
                "interestingVotes": {
                    "down": 17,
                    "up": 41
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "In shark's mouth",
                        "text": "Aaaaaaaaaaaaaaaaaaaaaaaaaahhhh!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457088",
                "interestingVotes": {
                    "up": 5
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "This shark, swallow you whole."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457097",
                "interestingVotes": {
                    "up": 5
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Hello."
                    },
                    {
                        "characters": [
                            {
                                "character": "Ben Gardner",
                                "characterId": "/character/ch0002883/",
                                "nameId": "/name/nm0455475/"
                            }
                        ],
                        "text": "Hello back... young feller. How are ya? Say I hope you not going out with those nuts, are ya?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457158",
                "interestingVotes": {
                    "up": 5
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "I got the creme de la creme. Right here. Hold on. Yeah, you see that?"
                    },
                    {
                        "stageDirection": "takes off his t-shirt, showing a very hairy chest"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "You're wearing a sweater!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0943695",
                "interestingVotes": {
                    "up": 5
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "on telephone",
                        "text": "Doctor, there is no need for me to come to Brisbane, when I have a great white shark right here!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt1249194",
                "interestingVotes": {
                    "up": 5
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "I don't believe it! Two barrels, and he's going down again!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457093",
                "interestingVotes": {
                    "down": 1,
                    "up": 7
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "Hooper attempts to wet his mask before Quint and Brody lower him in the shark cage",
                        "text": "I got no spit."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457131",
                "interestingVotes": {
                    "up": 4
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "What are you doing out there? These are your people - go and talk to them."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hendricks",
                                "characterId": "/character/ch0175509/",
                                "nameId": "/name/nm0469552/"
                            }
                        ],
                        "text": "Those aren't my people. They're from all over the place. Did you see all the license plates out in the parking lot? Connecticut, Rhode Island, New Jersey... I'm all by myself out there."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt1374098",
                "interestingVotes": {
                    "up": 4
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Mr. Taft"
                            }
                        ],
                        "text": "Why do you insist on playing the heavy all of the time?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Mrs. Taft",
                                "characterId": "/character/ch0002886/",
                                "nameId": "/name/nm0183914/"
                            }
                        ],
                        "text": "Look, I have a point of view and I think it speaks for many of the people here. It's not only me because I have the motel - how do you feel?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Mr. Hassett"
                            }
                        ],
                        "text": "Oh, I hope they don't close the beaches!"
                    },
                    {
                        "stageDirection": "Mrs. Taft nods in agreement"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt4556621",
                "interestingVotes": {
                    "up": 4
                },
                "lines": [
                    {
                        "stageDirection": "With the shark now dead, Brody and Hooper laugh with relief that their ordeal is over. Hooper looks around, and his laughter trails off as he realizes Quint is missing"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Quint."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "solemnly",
                        "text": "No."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457100",
                "interestingVotes": {
                    "down": 2,
                    "up": 8
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "stageDirection": "to Chief Brody",
                        "text": "You told me the shark was caught. And I, I heard it on the news... I heard it on the Cape station."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "They caught A shark, not THE shark. Big difference. Not the shark that killed Chrissie Watkins... and probably not the shark that killed the little boy... which I wanted to prove today, by cutting the shark open..."
                    },
                    {
                        "stageDirection": "sees the Chief pouring the wine he brought"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "you know, you oughta let that breathe a little"
                    },
                    {
                        "stageDirection": "sees the massive glass the Chief has poured"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "- nothing, nothing!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457107",
                "interestingVotes": {
                    "down": 1,
                    "up": 6
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "He ate the light."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457125",
                "interestingVotes": {
                    "up": 3
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Fast fish."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457128",
                "interestingVotes": {
                    "up": 3
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Pratt",
                                "characterId": "/character/ch0002889/",
                                "nameId": "/name/nm1188078/"
                            }
                        ],
                        "stageDirection": "to Hooper",
                        "text": "Ya know, I'm gonna stuff your friggin' head in there, man, and find out if it's a man-eater, all right?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5910347",
                "interestingVotes": {
                    "up": 3
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "He's gonna go under."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "I tell you he can't with three barrels on him. Not with three, he can't!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457092",
                "interestingVotes": {
                    "down": 1,
                    "up": 5
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "the Orca, their boat, is clearly sinking with water all over the deck, Quint hands Brody a small hand pump",
                        "text": "Pump it out Chief!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457134",
                "interestingVotes": {
                    "down": 1,
                    "up": 5
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Take this stuff back to the office and get to work on those signs. \"Beaches Closed - No Swimming. By the Order of the Amity PD\". And let Polly do the printing."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hendricks",
                                "characterId": "/character/ch0175509/",
                                "nameId": "/name/nm0469552/"
                            }
                        ],
                        "text": "What's the matter with my printing?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Let Polly do the printing."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457138",
                "interestingVotes": {
                    "down": 1,
                    "up": 5
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "Drunk",
                        "text": "I'm tellin' ya, the crime rate in New York'll kill you. There's so many problems, you never feel like you're accomplishing anything. Violence, rip-offs, muggings... kids can't leave the house - you gotta walk them to school. But in Amity one man can make a difference. In twenty-five years, there's never been a shooting or a murder in this town."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "Around a mouthful of food",
                        "text": "No kidding. Want a pretzel?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Where are we?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457152",
                "interestingVotes": {
                    "down": 1,
                    "up": 5
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "You're certifiable, Quint! You know that?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Yeah, yeah, yeah..."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt1374099",
                "interestingVotes": {
                    "down": 1,
                    "up": 5
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "I just- I just want to tell you what we're planning so far..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Meadows",
                                "characterId": "/character/ch0175508/",
                                "nameId": "/name/nm0331956/"
                            }
                        ],
                        "text": "What about the beaches, Chief?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "We're going to put on the extra- the extra summer deputies as quickly as possible, and then we're going to try and use, uh, shark-spotters on the beach."
                    },
                    {
                        "characters": [
                            {
                                "character": "Mrs. Taft",
                                "characterId": "/character/ch0002886/",
                                "nameId": "/name/nm0183914/"
                            }
                        ],
                        "stageDirection": "cuts him off",
                        "text": "Are you going to close the beaches?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "after brief pause",
                        "text": "Yes, we are."
                    },
                    {
                        "stageDirection": "townspeople erupt into dismayed argument"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457127",
                "interestingVotes": {
                    "up": 2
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "shouting",
                        "text": "Hooper, ya idiot! Starboard, ain't you watchin' it?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt3063263",
                "interestingVotes": {
                    "up": 2
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "Amidst commotion",
                        "text": "We're also planning to bring in some experts from the oceanographic institute on the mainland."
                    },
                    {
                        "characters": [
                            {
                                "character": "Mayor Vaughn",
                                "characterId": "/character/ch0002874/",
                                "nameId": "/name/nm0358069/"
                            }
                        ],
                        "text": "For only 24 hours!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "I didn't agree to that!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Mayor Vaughn",
                                "characterId": "/character/ch0002874/",
                                "nameId": "/name/nm0358069/"
                            }
                        ],
                        "text": "Only 24 hours."
                    },
                    {
                        "characters": [
                            {
                                "character": "Extra Townswoman"
                            }
                        ],
                        "text": "24 hours is like three weeks!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5909998",
                "interestingVotes": {
                    "down": 1,
                    "up": 3
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Ten thousand dollars."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Two hundred dollars a day whether I catch him or not."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "You got it."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Get the Mayor off my back so I don't have any more of this zoning crap."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "You got that."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "One case of apricot brandy. You buy the lunch."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Two cases!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457151",
                "interestingVotes": {
                    "down": 4,
                    "up": 4
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Christine 'Chrissie' Watkins",
                                "characterId": "/character/ch0002879/",
                                "nameId": "/name/nm0045681/"
                            }
                        ],
                        "text": "GOD HELP ME, PLEEEAAAAASE!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457098",
                "interestingVotes": {
                    "down": 1,
                    "up": 2
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Christine 'Chrissie' Watkins",
                                "characterId": "/character/ch0002879/",
                                "nameId": "/name/nm0045681/"
                            }
                        ],
                        "text": "Come on into the water!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457103",
                "interestingVotes": {
                    "down": 1,
                    "up": 2
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "before leaving dock",
                        "text": "Break it up will ya', Chief! Daylight's wastin'."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt3390611",
                "interestingVotes": {
                    "down": 1,
                    "up": 2
                },
                "lines": [
                    {
                        "stageDirection": "Quint has just destroyed the boat radio with a baseball bat when Chief Brody is trying to call on the Coast Guard"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "handing the bat to Brody",
                        "text": "Excuse me, chief."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "shouts hysterically; slamming down the receiver and hitting the bat on the already destroyed radio",
                        "text": "Ah, that *GREAT*! THAT'S JUST *GREAT*! WHERE THE HELL ARE WE NOW, HUH? YOU'RE CERTIFIABLE, QUINT, YOU KNOW THAT? YOU'RE CERTIFIABLE!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "dismissively",
                        "text": "Yeah, yeah, yeah..."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt3394952",
                "interestingVotes": {
                    "down": 1,
                    "up": 2
                },
                "lines": [
                    {
                        "stageDirection": "the three shark hunters have found the shark and are preparing to tag and kill it; Brody and Hooper are climbing over the the bow while Quint is in the cabin, taking out his harpoon gun"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonar Operator",
                                "nameId": "/name/nm5026359/"
                            }
                        ],
                        "stageDirection": "via Quint's radio",
                        "text": "Amity Point Light Station to Orca. This is Amity Point Light Station to Orca. Come in, Orca."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "answering; via receiver",
                        "text": "Orca. Come in."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonar Operator",
                                "nameId": "/name/nm5026359/"
                            }
                        ],
                        "stageDirection": "via radio cont",
                        "text": "I have Mrs. Martin Brody here."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Put her on."
                    },
                    {
                        "stageDirection": "Shift back to Brody and Hooper; The shark is circling around the boat"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Come on, Martin! Move, move, move!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "I'm not going out there!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Beyond the edge of the barrels, go to the end of the barrels!"
                    },
                    {
                        "stageDirection": "Brody stops halfway"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Further out!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "What?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "points with his outstretched arm",
                        "text": "Further out!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Why?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Go further out!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "What for?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Will you go to the end of the pulpit, please?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "What?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Will you please go to the end of the pulpit!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "What for?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "getting his camera out",
                        "text": "I need to have something in the foreground to give it some scale!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "shouts",
                        "text": "Foreground, my ass!"
                    },
                    {
                        "stageDirection": "Scene shifts to Quint"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "rapid fire speech; into the receiver",
                        "text": "Your husband's all right, Mrs. Brody, he's fishin', he just caught a couple of stripers, we'll bring 'em in for dinner, we won't be long, we haven't seen anything yet, over and out!"
                    },
                    {
                        "stageDirection": "Quint hangs up, ending the call"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt4071705",
                "interestingVotes": {
                    "down": 1,
                    "up": 2
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Artist",
                                "nameId": "/name/nm5026794/"
                            }
                        ],
                        "text": "Sh-Shark! The shark! He's going into the pond! The shark's in the estuary!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Now what?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "text": "Michael's in the pond!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Artist",
                                "nameId": "/name/nm5026794/"
                            }
                        ],
                        "text": "In the estuary! The shark's in the pond! He's going in the pond! Somebody do something! In the pond! In the pond! Shark! In the pond!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt4556572",
                "interestingVotes": {
                    "down": 1,
                    "up": 2
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "to Hooper",
                        "text": "Well, why don't we start leading the shark into shore instead of him leading us out to sea?"
                    },
                    {
                        "stageDirection": "Without answering, Hooper looks at Quint, then back at Brody"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5459694",
                "interestingVotes": {
                    "down": 1,
                    "up": 2
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Denherder",
                                "characterId": "/character/ch0002890/",
                                "nameId": "/name/nm0150019/"
                            }
                        ],
                        "text": "Charlie, take my word for it, don't look back! Swim, Charlie! Swim!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5909996",
                "interestingVotes": {
                    "down": 1,
                    "up": 2
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Tom Cassidy",
                                "characterId": "/character/ch0175511/",
                                "nameId": "/name/nm0277204/"
                            }
                        ],
                        "text": "I can swim! I just can't walk or undress myself."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5910350",
                "interestingVotes": {
                    "down": 1,
                    "up": 2
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Did you ever have a Great White do this?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "No!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt3394953",
                "interestingVotes": {
                    "up": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "screaming at Hooper, while Brody wets the reel of his shark-fishing rod",
                        "text": "HOOPER! REVERSE IT!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt3518979",
                "interestingVotes": {
                    "up": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Michael Brody",
                                "characterId": "/character/ch0002866/",
                                "nameId": "/name/nm0714268/"
                            }
                        ],
                        "text": "Pond's for old ladies."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "I know it's for the old ladies, but just do it for the old man, huh? Please?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt4557312",
                "interestingVotes": {
                    "down": 1,
                    "up": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "regarding Sean",
                        "text": "Wanna take him home?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "text": "Back to New York?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "No. Home here."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5910345",
                "interestingVotes": {
                    "down": 1,
                    "up": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "He can't stay down with three barrels. Not with three barrels, he can't."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "What about us?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5910351",
                "interestingVotes": {
                    "down": 1,
                    "up": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "We're headin' in, Brody."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Thank Christ!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5910343",
                "interestingVotes": {
                    "down": 1,
                    "up": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Mr. Hopper, attach the end of this line to the first keg. I gotta get a good shot at that porker's head. - - He's coming. He-he. He's coming. Hooper? Stay clear of the barrel. Hooper?Tie it up, will ya!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Your turn, Quint."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Hooper, where are you? Hooper, hurry it up now. Tie it on. Hurry up, he's coming straight for us. Don't screw it up now!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Don't wait for me."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Come on, Hooper! Hurry it up! Come on. Tie it on!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Now. Now. Kill it, quick! Kill it! Now!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Shoot!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt4565803",
                "interestingVotes": {
                    "down": 2,
                    "up": 1
                },
                "lines": [
                    {
                        "stageDirection": "Hendricks has discovered the remains of a woman on the beach. Brody approaches and sees what's left of the body"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Oh, Jesus."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt4556471",
                "interestingVotes": {
                    "down": 2
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Got a pen, Larry?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Mayor Vaughn",
                                "characterId": "/character/ch0002874/",
                                "nameId": "/name/nm0358069/"
                            }
                        ],
                        "text": "Pen?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "reaching into Vaughn's jacket",
                        "text": "Yeah a PEN, you know..."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt4556545",
                "interestingVotes": {
                    "down": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "from the crow's nest",
                        "text": "Brody? Start that chum line again, will ya!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Let Hooper take a turn."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Hooper drives the boat, Chief."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5322802",
                "interestingVotes": {
                    "down": 2
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "while typing up the report on Chrissy Watkins",
                        "text": "Polly, if this new filing system is going to work you've gotta keep that outdated stuff off my desk. Just the pending, all right?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Polly",
                                "characterId": "/character/ch0002887/",
                                "nameId": "/name/nm2137043/"
                            }
                        ],
                        "text": "Yes, chief. Now we got a bunch of calls about that karate school. It seems that the nine year olds from the school have been... karateing the picket fences!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5766838",
                "interestingVotes": {
                    "down": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Michael Brody",
                                "characterId": "/character/ch0002866/",
                                "nameId": "/name/nm0714268/"
                            }
                        ],
                        "text": "Aw, Dad, the pond's for old ladies."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "I know it is. But just do it for the old man, will ya?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5909997",
                "interestingVotes": {
                    "down": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "text": "Listen, Chief, be careful, will ya?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "In this town?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5910349",
                "interestingVotes": {
                    "down": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "He's chasing us. I don't believe it!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5910344",
                "interestingVotes": {
                    "down": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Well, what do we do now? We're quittin' right?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "We've got one barrel on him. So, we stay out here till we find him again."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Yeah, but we could radio in and get a bigger boat out here."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5910346",
                "interestingVotes": {
                    "down": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Hopper, get the pump out of the locker in front you, will you?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "We're gonna sink, aren't we?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5910348",
                "interestingVotes": {
                    "down": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Did you ever have one do this before?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "No."
                    }
                ],
                "spoiler": false
            }
        ]
    }
const QUOTE2 = {
        "id": "/title/tt0068646/",
        "base": {
            "@type": "imdb.api.title.base",
            "id": "/title/tt0068646/",
            "image": {
                "height": 1982,
                "id": "/title/tt0068646/images/rm746868224",
                "url": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
                "width": 1396
            },
            "title": "The Godfather",
            "titleType": "movie",
            "year": 1972
        },
        "quotes": [
            {
                "id": "/title/tt0068646/quotes/qt0361892",
                "interestingVotes": {
                    "down": 3,
                    "up": 421
                },
                "lines": [
                    {
                        "stageDirection": "to Rocco who has killed Paulie in the car"
                    },
                    {
                        "characters": [
                            {
                                "character": "Peter Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "Leave the gun. Take the cannoli."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361852",
                "interestingVotes": {
                    "down": 8,
                    "up": 709
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "My father is no different than any powerful man, any man with power, like a president or senator."
                    },
                    {
                        "characters": [
                            {
                                "character": "Kay Adams",
                                "characterId": "/character/ch0000793/",
                                "nameId": "/name/nm0000473/"
                            }
                        ],
                        "text": "Do you know how naive you sound, Michael? Presidents and senators don't have men killed."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Oh. Who's being naive, Kay?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361867",
                "interestingVotes": {
                    "down": 4,
                    "up": 430
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "stageDirection": "speaking to Carlo",
                        "text": "Only don't tell me you're innocent. Because it insults my intelligence and makes me very angry."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361877",
                "interestingVotes": {
                    "down": 6,
                    "up": 420
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Johnny Fontane",
                                "characterId": "/character/ch0000822/",
                                "nameId": "/name/nm0553887/"
                            }
                        ],
                        "stageDirection": "discussing his problems",
                        "text": "I don't know what to do, Godfather. My voice is weak, it's weak. Anyway, if I had this part in the picture, it puts me right back on top, you know. But this... this man out there. He won't give it to me, the head of the studio."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "What's his name?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "Woltz. He said there's no chance, no chance..."
                    },
                    {
                        "stageDirection": "Meanwhile, Hagen finds Sonny and summons him"
                    },
                    {
                        "characters": [
                            {
                                "character": "Johnny Fontane",
                                "characterId": "/character/ch0000822/",
                                "nameId": "/name/nm0553887/"
                            }
                        ],
                        "text": "A month ago he bought the rights to this book, a best seller. The main character is a guy just like me. I wouldn't even have to act, just be myself. Oh, Godfather, I don't know what to do, I don't know what to do..."
                    },
                    {
                        "stageDirection": "All of a sudden, Don Corleone rises from his chair and gives Fontane a savage shake"
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "YOU CAN ACT LIKE A MAN!"
                    },
                    {
                        "stageDirection": "gives a quick slap to Fontane"
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "What's the matter with you? Is this what you've become, a Hollywood finocchio who cries like a woman? \"Oh, what do I do? What do I do?\" What is that nonsense? Ridiculous!"
                    },
                    {
                        "stageDirection": "the Don's unexpected mimicry makes Hagen and even Fontane laugh; around this time Sonny comes in"
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "Tell me, do you spend time with your family?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Johnny Fontane",
                                "characterId": "/character/ch0000822/",
                                "nameId": "/name/nm0553887/"
                            }
                        ],
                        "text": "Sure I do."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "Good. Because a man who doesn't spend time with his family can never be a real man."
                    },
                    {
                        "stageDirection": "gives a quick look at Sonny and affectionately embraces Fontane"
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "You look terrible. I want you to eat, I want you to rest well. And a month from now this Hollywood big shot's gonna give you what you want."
                    },
                    {
                        "characters": [
                            {
                                "character": "Johnny Fontane",
                                "characterId": "/character/ch0000822/",
                                "nameId": "/name/nm0553887/"
                            }
                        ],
                        "text": "Too late. They start shooting in a week."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "I'm gonna make him an offer he can't refuse. Okay? I want you to leave it all to me. Go on, go back to the party."
                    },
                    {
                        "stageDirection": "a gratified Fontane leaves"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361856",
                "interestingVotes": {
                    "down": 3,
                    "up": 276
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Kay Adams",
                                "characterId": "/character/ch0000793/",
                                "nameId": "/name/nm0000473/"
                            }
                        ],
                        "text": "Michael, you never told me you knew Johnny Fontane!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Sure, you want to meet him?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Kay Adams",
                                "characterId": "/character/ch0000793/",
                                "nameId": "/name/nm0000473/"
                            }
                        ],
                        "text": "Well, yeah! Sure."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "My father helped him with his career."
                    },
                    {
                        "characters": [
                            {
                                "character": "Kay Adams",
                                "characterId": "/character/ch0000793/",
                                "nameId": "/name/nm0000473/"
                            }
                        ],
                        "text": "How did he do that?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "...Let's listen to the song."
                    },
                    {
                        "characters": [
                            {
                                "character": "Kay Adams",
                                "characterId": "/character/ch0000793/",
                                "nameId": "/name/nm0000473/"
                            }
                        ],
                        "stageDirection": "after listening to Johnny for a while",
                        "text": "Tell me, Michael. Please."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Well, when Johnny was first starting out, he was signed to a personal services contract with this big-band leader. And as his career got better and better, he wanted to get out of it. But the band leader wouldn't let him. Now, Johnny is my father's godson. So my father went to see this bandleader and offered him $10,000 to let Johnny go, but the bandleader said no. So the next day, my father went back, only this time with Luca Brasi. Within an hour, he had a signed release for a certified check of $1000."
                    },
                    {
                        "characters": [
                            {
                                "character": "Kay Adams",
                                "characterId": "/character/ch0000793/",
                                "nameId": "/name/nm0000473/"
                            }
                        ],
                        "text": "How did he do that?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "My father made him an offer he couldn't refuse."
                    },
                    {
                        "characters": [
                            {
                                "character": "Kay Adams",
                                "characterId": "/character/ch0000793/",
                                "nameId": "/name/nm0000473/"
                            }
                        ],
                        "text": "What was that?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Luca Brasi held a gun to his head, and my father assured him that either his brains or his signature would be on the contract."
                    },
                    {
                        "characters": [
                            {
                                "character": "Kay Adams",
                                "characterId": "/character/ch0000793/",
                                "nameId": "/name/nm0000473/"
                            }
                        ],
                        "text": "..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "...That's a true story."
                    },
                    {
                        "stageDirection": "cut to Johnny singing again for about 10 more seconds before going back to Michael"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "That's my family Kay, that's not me."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361850",
                "interestingVotes": {
                    "down": 4,
                    "up": 276
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Calo",
                                "characterId": "/character/ch0000831/",
                                "nameId": "/name/nm0162948/"
                            }
                        ],
                        "text": "In Sicily, women are more dangerous than shotguns."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361842",
                "interestingVotes": {
                    "down": 1,
                    "up": 139
                },
                "lines": [
                    {
                        "stageDirection": "last lines"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "All right. This one time I'll let you ask me about my affairs."
                    },
                    {
                        "characters": [
                            {
                                "character": "Kay Adams",
                                "characterId": "/character/ch0000793/",
                                "nameId": "/name/nm0000473/"
                            }
                        ],
                        "text": "Is it true? Is it?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "No."
                    },
                    {
                        "stageDirection": "Kay smiles and walks into his arms"
                    },
                    {
                        "characters": [
                            {
                                "character": "Kay Adams",
                                "characterId": "/character/ch0000793/",
                                "nameId": "/name/nm0000473/"
                            }
                        ],
                        "text": "I guess we both need a drink, huh?"
                    },
                    {
                        "stageDirection": "Kay goes to the kitchen to fix a drink, but sees Peter Clemenza, Rocco Lampone and Al Neri enter Michael's office"
                    },
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "Don Corleone."
                    },
                    {
                        "stageDirection": "Clemenza kisses Michael's hand, and Neri shuts the door in her face..."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361874",
                "interestingVotes": {
                    "up": 89
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "You talk about vengeance. Is vengeance going to bring your son back to you? Or my boy to me?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361879",
                "interestingVotes": {
                    "up": 72
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "Mr Corleone is Johnny Fontane's godfather. Now Italians regard that as a very close, a very sacred religious relationship."
                    },
                    {
                        "characters": [
                            {
                                "character": "Jack Woltz",
                                "characterId": "/character/ch0000817/",
                                "nameId": "/name/nm0549134/"
                            }
                        ],
                        "text": "Tell your boss he can ask for anything else, but this is one favour I can't grant him."
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "Mr. Corleone never asks a second favor once he's refused the first, understood?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Jack Woltz",
                                "characterId": "/character/ch0000817/",
                                "nameId": "/name/nm0549134/"
                            }
                        ],
                        "text": "You don't understand. Johnny Fontane never gets that movie. That part is perfect for him. It'll make him a big star. I'm gonna run him out of the movies. And let me tell you why. Johnny Fontane ruined one of Woltz International's most valuable proteges. For three years we had her under contract, singing lessons, dancing lessons, acting lessons. I spent hundreds of thousands of dollars. I was gonna make her a big star. And let me be even more frank, just to show you that I'm not a hard-hearted man, that it's not all dollars and cents. She was beautiful! She was young, she was innocent. She was the greatest piece of ass I've ever had, and I've had 'em all over the world. And then Johnny Fontaine comes along with his olive oil voice and guinea charm and she runs off. She threw it all away just to make me look ridiculous. And a man in my position can't afford to be made to look ridiculous. Now you get the hell out of here! And if that goomba tries any rough stuff, you tell him I ain't no bandleader. Yeah, I heard that story."
                    },
                    {
                        "stageDirection": "Hagen has been calmly eating his meal throughout Woltz's tirade"
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "Thank you for the dinner and a very pleasant evening. Have your car take me to the airport. Mr Corleone is a man who insists on hearing bad news at once."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361844",
                "interestingVotes": {
                    "down": 2,
                    "up": 135
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "My credit good enough to buy you out?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Moe Greene",
                                "characterId": "/character/ch0000809/",
                                "nameId": "/name/nm0733678/"
                            }
                        ],
                        "text": "Buy me out?"
                    },
                    {
                        "stageDirection": "Fredo laughs nervously"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "The hotel, the casino. The Corleone Family wants to buy you out."
                    },
                    {
                        "characters": [
                            {
                                "character": "Moe Greene",
                                "characterId": "/character/ch0000809/",
                                "nameId": "/name/nm0733678/"
                            }
                        ],
                        "text": "The Corleone Family wants to buy me out? No, I buy you out, you don't buy me out."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Your casino loses money, maybe we can do better."
                    },
                    {
                        "characters": [
                            {
                                "character": "Moe Greene",
                                "characterId": "/character/ch0000809/",
                                "nameId": "/name/nm0733678/"
                            }
                        ],
                        "text": "You think I'm skimmin off the top, Mike?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "stageDirection": "Michael shakes his head",
                        "text": "You're unlucky."
                    },
                    {
                        "characters": [
                            {
                                "character": "Moe Greene",
                                "characterId": "/character/ch0000809/",
                                "nameId": "/name/nm0733678/"
                            }
                        ],
                        "text": "You goddamn guineas you really make me laugh. I do you a favor and take Freddie in when you're having a bad time, and now you're gonna try and push me out!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "You took Freddie in because the Corleone Family bankrolled your casino, and the Molinari Family on the Coast guaranteed his safety. Now we're talking business, let's talk business."
                    },
                    {
                        "characters": [
                            {
                                "character": "Moe Greene",
                                "characterId": "/character/ch0000809/",
                                "nameId": "/name/nm0733678/"
                            }
                        ],
                        "text": "Yeah, let's talk business, Mike. First of all, you're all done. The Corleone Family don't even have that kind of muscle anymore. The Godfather's sick, right? You're getting chased out of New York by Barzini and the other Families. What do you think is going on here? You think you can come to my hotel and take over? I talked to Barzini - I can make a deal with him, and still keep my hotel!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Is that why you slapped my brother around in public?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Fredo",
                                "characterId": "/character/ch0000801/",
                                "nameId": "/name/nm0001030/"
                            }
                        ],
                        "text": "Aw, now that, that was nothin', Mike. Moe didn't mean nothin' by that. Yeah, sure he flies off the handle every once in a while, but me and him, we're good friends, right Moe?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Moe Greene",
                                "characterId": "/character/ch0000809/",
                                "nameId": "/name/nm0733678/"
                            }
                        ],
                        "text": "I got a business to run. I gotta kick asses sometimes to make it run right. We had a little argument, Freddy and me, so I had to straighten him out."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "You straightened my brother out?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Moe Greene",
                                "characterId": "/character/ch0000809/",
                                "nameId": "/name/nm0733678/"
                            }
                        ],
                        "text": "He was banging cocktail waitresses two at a time! Players couldn't get a drink at the table! What's the matter with you?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "I leave for New York tomorrow, think about a price."
                    },
                    {
                        "characters": [
                            {
                                "character": "Moe Greene",
                                "characterId": "/character/ch0000809/",
                                "nameId": "/name/nm0733678/"
                            }
                        ],
                        "text": "Sonofabitch! Do you know who I am? I'm Moe Greene! I made my bones when you were going out with cheerleaders!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Fredo",
                                "characterId": "/character/ch0000801/",
                                "nameId": "/name/nm0001030/"
                            }
                        ],
                        "text": "Wait a minute, Moe, Moe, I got an idea. Tom, you're the Consiglieri and you can talk to the Don, you can explain..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "Now hold it right there. The Don is semi-retired and Mike is in charge of the Family business now. If you have anything to say, say it to Michael."
                    },
                    {
                        "characters": [
                            {
                                "character": "Fredo",
                                "characterId": "/character/ch0000801/",
                                "nameId": "/name/nm0001030/"
                            }
                        ],
                        "stageDirection": "Moe Greene leaves",
                        "text": "Mike! You do not come to Las Vegas and talk to a man like Moe Greene like that!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Fredo, you're my older brother, and I love you. But don't ever take sides with anyone against the Family again. Ever."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0531679",
                "interestingVotes": {
                    "down": 7,
                    "up": 260
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "We have known each other many years, but this is the first time you've come to me for counsel or for help. I can't remember the last time you invited me to your house for a cup of coffee, even though my wife is godmother to your only child. But let's be frank here. You never wanted my friendship. And you feared to be in my debt."
                    },
                    {
                        "characters": [
                            {
                                "character": "Bonasera",
                                "characterId": "/character/ch0000832/",
                                "nameId": "/name/nm0181128/"
                            }
                        ],
                        "text": "I didn't want to get into trouble."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "I understand. You found paradise in America. You had a good trade, you made a good living. The police protected you and there were courts of law. So you didn't need a friend like me. Now you come and say \"Don Corleone, give me justice.\" But you don't ask with respect. You don't offer friendship. You don't even think to call me \"Godfather.\" You come into my house on the day my daughter is to be married and you ask me to do murder - for money."
                    },
                    {
                        "characters": [
                            {
                                "character": "Bonasera",
                                "characterId": "/character/ch0000832/",
                                "nameId": "/name/nm0181128/"
                            }
                        ],
                        "text": "I ask you for justice."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "That is not justice. Your daughter is alive."
                    },
                    {
                        "characters": [
                            {
                                "character": "Bonasera",
                                "characterId": "/character/ch0000832/",
                                "nameId": "/name/nm0181128/"
                            }
                        ],
                        "text": "Let them suffer then as she suffers."
                    },
                    {
                        "stageDirection": "the Don is silent"
                    },
                    {
                        "characters": [
                            {
                                "character": "Bonasera",
                                "characterId": "/character/ch0000832/",
                                "nameId": "/name/nm0181128/"
                            }
                        ],
                        "text": "How much shall I pay you?"
                    },
                    {
                        "stageDirection": "the Don turns away dismissively, but Bonasera stays on"
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "Bonasera, Bonasera, what have I ever done to make you treat me so disrespectfully? If you'd come to me in friendship, this scum who ruined your daughter would be suffering this very day. And if by some chance an honest man like yourself made enemies they would become my enemies. And then, they would fear you."
                    },
                    {
                        "characters": [
                            {
                                "character": "Bonasera",
                                "characterId": "/character/ch0000832/",
                                "nameId": "/name/nm0181128/"
                            }
                        ],
                        "text": "Be my friend... Godfather."
                    },
                    {
                        "stageDirection": "the Don at first shrugs, but upon hearing the title he lifts his hand, and a humbled Bonasera kisses the ring on it"
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "Good."
                    },
                    {
                        "stageDirection": "He places his hand around Bonasera in a paternal gesture"
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "Some day, and that day may never come, I will call upon you to do a service for me. But until that day, consider this justice a gift on my daughter's wedding day."
                    },
                    {
                        "stageDirection": "a gratified Bonasera offers his thanks and leaves"
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "stageDirection": "to Hagen",
                        "text": "Give this job to Clemenza. I want reliable people, people who aren't going to be carried away. I mean, we're not murderers, in spite of what this undertaker thinks..."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361865",
                "interestingVotes": {
                    "down": 1,
                    "up": 93
                },
                "lines": [
                    {
                        "stageDirection": "Tessio brings in Luca Brasi's bulletproof vest, delivered with a fish inside"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "What the hell is this?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "It's a Sicilian message. It means Luca Brasi sleeps with the fishes."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361843",
                "interestingVotes": {
                    "down": 1,
                    "up": 84
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Sollozzo",
                                "characterId": "/character/ch0395467/",
                                "nameId": "/name/nm0504803/"
                            }
                        ],
                        "text": "Bene, Don Corleone. I need a man who has powerful friends. I need a million dollars in cash. I need, Don Corleone, all of those politicians that you carry around in your pocket, like so many nickels and dimes."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "What is the interest for my family?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sollozzo",
                                "characterId": "/character/ch0395467/",
                                "nameId": "/name/nm0504803/"
                            }
                        ],
                        "text": "Thirty percent. In the first year your end should be three, four million dollars. And then it would go up."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "And what is the interest for the Tattalgia family?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sollozzo",
                                "characterId": "/character/ch0395467/",
                                "nameId": "/name/nm0504803/"
                            }
                        ],
                        "stageDirection": "smiles at Tom",
                        "text": "My compliments."
                    },
                    {
                        "stageDirection": "Hagen gives a formal nod"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sollozzo",
                                "characterId": "/character/ch0395467/",
                                "nameId": "/name/nm0504803/"
                            }
                        ],
                        "text": "I'll take care of the Tattaglias, out of my share."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "So, I am to receive thirty percent for finance, for legal protection and political influence. Is that what you're telling me?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sollozzo",
                                "characterId": "/character/ch0395467/",
                                "nameId": "/name/nm0504803/"
                            }
                        ],
                        "text": "That's right."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "Why come to me? What have I done to deserve such generosity?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sollozzo",
                                "characterId": "/character/ch0395467/",
                                "nameId": "/name/nm0504803/"
                            }
                        ],
                        "text": "If you consider a million dollars in cash merely finance..."
                    },
                    {
                        "stageDirection": "raises his glass"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sollozzo",
                                "characterId": "/character/ch0395467/",
                                "nameId": "/name/nm0504803/"
                            }
                        ],
                        "text": "Te salut, Don Corleone."
                    },
                    {
                        "stageDirection": "the Don gets up to take a drink and sits closer to Sollozzo"
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "I said that I would see you because I had heard that you were a serious man, to be treated with respect. But I must say no to you and let me give you my reasons. It's true I have a lot of friends in politics, but they wouldn't be so friendly if they knew my business was drugs instead of gambling which they consider a harmless vice. But drugs, that's a dirty business."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sollozzo",
                                "characterId": "/character/ch0395467/",
                                "nameId": "/name/nm0504803/"
                            }
                        ],
                        "text": "No, Don Corleone..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "It makes no difference, it don't make any difference to me what a man does for a living, you understand. But your business is a little dangerous."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sollozzo",
                                "characterId": "/character/ch0395467/",
                                "nameId": "/name/nm0504803/"
                            }
                        ],
                        "text": "If you're worried about security for your million, the Tattaglias will guarantee it."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "Whoa, now, you're telling me that the Tattaglias guarantee our investment without...?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "Wait a minute."
                    },
                    {
                        "stageDirection": "the Don gives his son a cold stare, freezing Santino into silence. The others fidget with embarrassment at this outbreak, but Sollozzo looks slyly satisfied..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "stageDirection": "dismissive",
                        "text": "I have a sentimental weakness for my children and I spoil them, as you can see. They talk when they should listen. Anyway, Signor Sollozzo, my no to you is final. I want to congratulate you on your new business and I'm sure you'll do very well and good luck to you. Especially since your interests don't conflict with mine. Thank you."
                    },
                    {
                        "stageDirection": "Sollozzo leaves"
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "Santino, come here."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "What's the matter with you? I think your brain is going soft with all that comedy you are playing with that young girl. Never tell anyone outside the Family what you are thinking again. Go on."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361911",
                "interestingVotes": {
                    "up": 56
                },
                "lines": [
                    {
                        "stageDirection": "at midnight, Don Corleone walks into his office and finds Tom Hagen taking a drink"
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "Give me a drop."
                    },
                    {
                        "stageDirection": "Hagen hands the Don his glass of anisette"
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "My wife is crying upstairs. I hear cars coming to the house. Consigliore of mine, I think it's time you told your Don what everyone seems to know."
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "I didn't tell Mama anything. I was just about to come up and wake you so that I could tell you."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "But you needed a drink first."
                    },
                    {
                        "stageDirection": "Hagen nods"
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "And now you've had your drink."
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "They shot Sonny on the causeway. He's dead."
                    },
                    {
                        "stageDirection": "the Don accepts this news without any sign of emotion, except to close his eyes and remain silent for a few minutes"
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "stageDirection": "speaking at last",
                        "text": "I want no inquiries made. I want no acts of vengeance. I want you to arrange a meeting with the heads of the Five Families. This war stops now."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0554654",
                "interestingVotes": {
                    "up": 52
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "stageDirection": "to Michael",
                        "text": "Listen, whoever comes to you with this Barzini meeting, he's the traitor. Don't forget that."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361837",
                "interestingVotes": {
                    "up": 49
                },
                "lines": [
                    {
                        "stageDirection": "speaking to himself, practicing his speech"
                    },
                    {
                        "characters": [
                            {
                                "character": "Luca Brasi",
                                "characterId": "/character/ch0000820/",
                                "nameId": "/name/nm0598926/"
                            }
                        ],
                        "text": "Don Corleone, I am honored and grateful that you have invited me to your home on the wedding day of your daughter. And may their first child be a masculine child."
                    },
                    {
                        "stageDirection": "then, starting over"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361884",
                "interestingVotes": {
                    "down": 1,
                    "up": 69
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Sollozzo",
                                "characterId": "/character/ch0395467/",
                                "nameId": "/name/nm0504803/"
                            }
                        ],
                        "text": "I don't like violence, Tom. I'm a businessman; blood is a big expense."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0554653",
                "interestingVotes": {
                    "up": 43
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "Oh, I want you to arrange to have a telephone man check all the calls going in and out of here because it could be anyone..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "I did that already, Pop. I took care of that."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "Oh, that's right. I forgot."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "What's the matter? What's bothering you? I'll handle it. I told you I can handle it, I'll handle it."
                    },
                    {
                        "stageDirection": "the Don rises as if to leave, but changes his mind midway and seats himself closer to Michael"
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "I knew Santino was going to have to go through all this and Fredo... well, Fredo was... But I, I never wanted this for you. I work my whole life, I don't apologize, to take care of my family. And I refused to be a fool dancing on the strings held by all of those big shots. That's my life, I don't apologize for that. But I always thought that when it was your time, that you would be the one to hold the strings. Senator Corleone, Governor Corleone, something."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Another pezzonovante."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "Well, there wasn't enough time, Michael. There just wasn't enough time."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "We'll get there, Pop. We'll get there."
                    },
                    {
                        "stageDirection": "the Don kisses his son on the forehead"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361890",
                "interestingVotes": {
                    "down": 1,
                    "up": 55
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "You talk about vengeance. Is vengeance going to bring your son back to you, or my boy to me? I forgo the vengeance of my son. But I have selfish reasons. My youngest son was forced to leave this country because of this Sollozzo business. All right, now I have to make arrangements to bring him back here safely cleared of all these false charges. But I'm a superstitious man, and if some unlucky accident should befall him... if he should be shot in the head by a police officer, or if he should hang himself in his jail cell, or if he's struck by a bolt of lightning, then I'm going to blame some of the people in this room, and that I do not forgive. But, that aside, let me say that I swear, on the souls of my grandchildren, that I will not be the one to break the peace we have made here today."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361910",
                "interestingVotes": {
                    "up": 36
                },
                "lines": [
                    {
                        "stageDirection": "Sonny pays a visit to his sister Connie. He is surprised to find her subdued and evasive"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "stageDirection": "surprised",
                        "text": "What's the matter? Huh? What's the matter?"
                    },
                    {
                        "stageDirection": "He looks at her swollen face and understands what has happened. He pulls away to go after Carlo..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Connie",
                                "characterId": "/character/ch0440490/",
                                "nameId": "/name/nm0001735/"
                            }
                        ],
                        "stageDirection": "grabbing his shoulders",
                        "text": "It was my fault!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "Where is he?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Connie",
                                "characterId": "/character/ch0440490/",
                                "nameId": "/name/nm0001735/"
                            }
                        ],
                        "stageDirection": "weeping with terror",
                        "text": "Sonny, please. Sonny, it was my fault. It was my fault. I started a fight with him. Please, Sonny..."
                    },
                    {
                        "stageDirection": "Sonny, now under control, hushes her and kisses her forehead"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "Okay... I'm just going to get a doctor to come down and take a look at you."
                    },
                    {
                        "characters": [
                            {
                                "character": "Connie",
                                "characterId": "/character/ch0440490/",
                                "nameId": "/name/nm0001735/"
                            }
                        ],
                        "text": "Sonny, please don't do anything. Please don't do anything."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "What's the matter with you, huh? What am I going to do? Am I going to make that baby an orphan before he's born?"
                    },
                    {
                        "stageDirection": "Connie gives a chuckle, and Sonny kisses her again and good-humouredly shrugs his soldiers"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "All right?"
                    },
                    {
                        "stageDirection": "cut to Sonny beating up Carlo"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361855",
                "interestingVotes": {
                    "down": 3,
                    "up": 84
                },
                "lines": [
                    {
                        "stageDirection": "first lines"
                    },
                    {
                        "characters": [
                            {
                                "character": "Bonasera",
                                "characterId": "/character/ch0000832/",
                                "nameId": "/name/nm0181128/"
                            }
                        ],
                        "text": "I believe in America. America has made my fortune. And I raised my daughter in the American fashion. I gave her freedom but I taught her never to dishonor her family. She found a \"boy friend,\" not an Italian. She went to the movies with him. She stayed out late. I didn't protest. Two months ago he took her for a drive, with another boy friend. They made her drink whiskey and then they tried to take advantage of her. She resisted. She kept her honor. So they beat her. Like an animal. When I went to the hospital her nose was broken. Her jaw was shattered, held together by wire. She couldn't even weep because of the pain. But I wept. Why did I weep? She was the light of my life. A beautiful girl. Now she will never be beautiful again."
                    },
                    {
                        "stageDirection": "He breaks down at this point, and the Don gestures to his son to get him a drink"
                    },
                    {
                        "characters": [
                            {
                                "character": "Bonasera",
                                "characterId": "/character/ch0000832/",
                                "nameId": "/name/nm0181128/"
                            }
                        ],
                        "text": "Sorry..."
                    },
                    {
                        "stageDirection": "He regains his composure and carries on"
                    },
                    {
                        "characters": [
                            {
                                "character": "Bonasera",
                                "characterId": "/character/ch0000832/",
                                "nameId": "/name/nm0181128/"
                            }
                        ],
                        "text": "I went to the police, like a good American. These two boys were brought to trial. The judge sentenced them to three years in prison, and suspended the sentence. Suspended sentence! They went free that very day! I stood in the courtroom like a fool, and those two bastards, they smiled at me. Then I said to my wife, \"For justice, we must go to Don Corleone.\""
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "Why did you go to the police? Why didn't you come to me first?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Bonasera",
                                "characterId": "/character/ch0000832/",
                                "nameId": "/name/nm0181128/"
                            }
                        ],
                        "text": "What do you want of me? Tell me anything. But do what I beg you to do."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "What is that?"
                    },
                    {
                        "stageDirection": "Bonasera gets up from his seat and whispers into the Don's ear; for a long moment the Don is silent"
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "That I cannot do."
                    },
                    {
                        "characters": [
                            {
                                "character": "Bonasera",
                                "characterId": "/character/ch0000832/",
                                "nameId": "/name/nm0181128/"
                            }
                        ],
                        "text": "I will give you anything you ask!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0554651",
                "interestingVotes": {
                    "down": 5,
                    "up": 110
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "I hope you don't mind the way I keep going over this Barzini business."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "No, not at all."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "It's an old habit. I spent my whole life trying not to be careless. Women and children can afford to be careless, but not men."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361909",
                "interestingVotes": {
                    "up": 35
                },
                "lines": [
                    {
                        "stageDirection": "Clemenza prepares Michael for his meeting with Sollozzo"
                    },
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "stageDirection": "holding up a .22",
                        "text": "It's as cold as they come, impossible to trace. So you don't have to worry about prints, Mike. I put a special tape on the trigger and the butt. Here, try it..."
                    },
                    {
                        "stageDirection": "Michael takes the gun, but can't seem to fire it"
                    },
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "What's the matter, trigger too tight?"
                    },
                    {
                        "stageDirection": "With a loud bang, Michael finally discharges the gun"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Ow! My ears."
                    },
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "Yeah, I left it noisy. That way it scares any pain-in-the-ass innocent bystanders away. All right, you shot them both, now what do you do?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Sit down and finish my dinner."
                    },
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "Come on, kid, don't fool around. Just let your hand drop to your side and the gun slip out. Everyone will still think you've got it. They're gonna be staring at your face, Mike. So walk out of the place real fast, but you don't run. Don't look nobody directly in the eye, hut don't look away either. They're gonna be scared of you, believe me, so don't worry about nothing."
                    },
                    {
                        "stageDirection": "while talking, Clemenza takes the gun and begins working on it to fix the trigger"
                    },
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "You know, Mike, you're gonna turn out all right. You take a long vacation, nobody knows where, and we'll catch the hell."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "How bad do you think it's gonna be?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "Pretty goddam bad. Probably all the other Families will line up against us. That's all right. These things gotta happen every five years or so, ten years. Helps to get rid of the bad blood. Been ten years since the last one. You know, you gotta stop them at the beginning. Like they should have stopped Hitler at Munich, they should never let him get away with that, they was just asking for trouble."
                    },
                    {
                        "stageDirection": "Clemenza now finishes working on the gun"
                    },
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "You know, Mike, we was all proud of you being a hero and all. Your father too."
                    },
                    {
                        "stageDirection": "Clemenza hands the gun back to Michael"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361861",
                "interestingVotes": {
                    "down": 1,
                    "up": 49
                },
                "lines": [
                    {
                        "stageDirection": "Michael sees a man dressed in black coming to Vito's hospital room"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael Corleone",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Who are you?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Enzo the Baker",
                                "characterId": "/character/ch0041720/",
                                "nameId": "/name/nm0868442/"
                            }
                        ],
                        "text": "I am Enzo. The baker. Do you remember me?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael Corleone",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Enzo..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Enzo the Baker",
                                "characterId": "/character/ch0041720/",
                                "nameId": "/name/nm0868442/"
                            }
                        ],
                        "text": "Yes, Enzo."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael Corleone",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "You better get out of here, Enzo, there's gonna be trouble."
                    },
                    {
                        "characters": [
                            {
                                "character": "Enzo the Baker",
                                "characterId": "/character/ch0041720/",
                                "nameId": "/name/nm0868442/"
                            }
                        ],
                        "text": "If there is trouble, I stay here to help you. For your father. For your father."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361871",
                "interestingVotes": {
                    "up": 31
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "When I meet with Tattaglia's men, should I insist all their drug middlemen have clean records?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "Mention it, don't insist. But Barzini will know that without being told."
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "You mean Tattaglia..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "Tattaglia is a pimp. He never could have outfought Santino. But I didn't know until this day that it was Barzini all along."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361851",
                "interestingVotes": {
                    "up": 30
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "Hey, listen, I want somebody good - and I mean very good - to plant that gun. I don't want my brother coming out of that toilet with just his dick in his hands, alright?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "The gun'll be there."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0539489",
                "interestingVotes": {
                    "down": 1,
                    "up": 43
                },
                "lines": [
                    {
                        "stageDirection": "Sunday dinner at the Corleone home..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "Niggers havin' a real good time up in Harlem..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Carlo Rizzi",
                                "characterId": "/character/ch0000815/",
                                "nameId": "/name/nm0751625/"
                            }
                        ],
                        "text": "I knew that was going to happen as soon as they tasted the big money."
                    },
                    {
                        "characters": [
                            {
                                "character": "Connie",
                                "characterId": "/character/ch0440490/",
                                "nameId": "/name/nm0001735/"
                            }
                        ],
                        "text": "Papa never talked about business in front of the kids."
                    },
                    {
                        "characters": [
                            {
                                "character": "Carlo Rizzi",
                                "characterId": "/character/ch0000815/",
                                "nameId": "/name/nm0751625/"
                            }
                        ],
                        "text": "Shut up, Connie."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "Hey, don't you EVER tell her to shut up, you got that?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Mama Corleone",
                                "characterId": "/character/ch0033508/",
                                "nameId": "/name/nm0455088/"
                            }
                        ],
                        "text": "Santino, don't interfere."
                    },
                    {
                        "stageDirection": "Silence reigns around the table for a while"
                    },
                    {
                        "characters": [
                            {
                                "character": "Carlo Rizzi",
                                "characterId": "/character/ch0000815/",
                                "nameId": "/name/nm0751625/"
                            }
                        ],
                        "text": "Sonny, Tom, I'd like to talk to you after dinner. I think I can do a lot more for this family..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "We don't discuss business at the table."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361914",
                "interestingVotes": {
                    "down": 1,
                    "up": 39
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "Call Bonasera. We need him now."
                    },
                    {
                        "stageDirection": "Tom Hagen calls Amerigo Bonasera"
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "stageDirection": "on the phone",
                        "text": "This is Tom Hagen, calling for Vito Corleone at his request. Now, you owe your Don a service. He has no doubt that you will repay him. In one hour he will be at your funeral parlor to ask for your help. Be there to greet him."
                    },
                    {
                        "stageDirection": "as ordered, a nervous Bonasera meets the Don at his parlor"
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "Well, my friend, are you ready to do me this service?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Bonasera",
                                "characterId": "/character/ch0000832/",
                                "nameId": "/name/nm0181128/"
                            }
                        ],
                        "text": "Yes. What do you want me to do?"
                    },
                    {
                        "stageDirection": "the two walk into the embalming room, where a corpse lies on a table..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "stageDirection": "staring at the table",
                        "text": "I want you to use all your powers, and all your skills. I don't want his mother to see him this way."
                    },
                    {
                        "stageDirection": "he draws back the sheet to reveal, to a horrified Bonasera, the bullet-smashed face of Sonny Corleone"
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "stageDirection": "breaking down for a moment",
                        "text": "Look how they massacred my boy..."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361860",
                "interestingVotes": {
                    "down": 1,
                    "up": 33
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Michael Corleone",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Where does it say that you can't kill a cop?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "Come on, Mikey..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael Corleone",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Tom, wait a minute. I'm talking about a cop that's mixed up in drugs. I'm talking about a - a - a dishonest cop - a crooked cop who got mixed up in the rackets and got what was coming to him. That's a terrific story. And we have newspaper people on the payroll, don't we, Tom?"
                    },
                    {
                        "stageDirection": "Tom nods"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael Corleone",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "And they might like a story like that."
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "They might, they just might."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael Corleone",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "stageDirection": "to Sonny",
                        "text": "It's not personal, Sonny. It's strictly business."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361864",
                "interestingVotes": {
                    "up": 21
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "Sollozo is known as the Turk. He's supposed to be very good with a knife. But only in matters of business, or of some sort of reasonable complaint. His business is narcotics. He has the fields in Turkey, where they grow the poppy. In Sicily he has the plant to process it into heroin. He needs cash and he needs protection from the police for which he gives a piece of the action, I couldn't find out how much. The Tattaglia Family is behind him here in New York so they have to be in it for something."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "What about his prison record?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "Two terms, one in Italy, and one here. He's known as a top narcotics man."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "Santino, what do you think?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "There's a lot of money in that white powder."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "Tom?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "Well, I say yes. There is more money potential in narcotics than anything else we're looking at now. If we don't get into it, somebody else will, maybe one of the Five Families, maybe all of them. And with the money they earn they'll be able to buy more police and political power. Then they come after us. Right now we have the unions and we have the gambling and those are the best things to have. But narcotics is a thing of the future. If we don't get a piece of that action we risk everything we have. Not now, but ten years from now."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "Well, what's your answer gonna be, Pop?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361848",
                "interestingVotes": {
                    "up": 19
                },
                "lines": [
                    {
                        "stageDirection": "after Michael gets off the phone with Kay, clearly too embarrassed to tell her he loves her"
                    },
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "Mikey, why don't you tell that nice girl you love her? I love you with all-a my heart, if I don't see-a you again soon, I'm-a gonna die."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0511688",
                "interestingVotes": {
                    "down": 2,
                    "up": 37
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "stageDirection": "to the Don, quietly",
                        "text": "Just lie here, Pop. I'll take care of you now. I'm with you now. I'm with you."
                    },
                    {
                        "stageDirection": "he takes the Don's hand and kisses it, the Don begins to cry"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361854",
                "interestingVotes": {
                    "down": 1,
                    "up": 25
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Jack Woltz",
                                "characterId": "/character/ch0000817/",
                                "nameId": "/name/nm0549134/"
                            }
                        ],
                        "text": "All right, start talking!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "I come from a personal friend of Mr Johnny Fontane. That friend promises his undying friendship if you would do him a small favour."
                    },
                    {
                        "characters": [
                            {
                                "character": "Jack Woltz",
                                "characterId": "/character/ch0000817/",
                                "nameId": "/name/nm0549134/"
                            }
                        ],
                        "text": "What's that?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "Give Johnny a part in that war movie you're starting next week."
                    },
                    {
                        "stageDirection": "Woltz signs a document with a smile and walks away, Hagen alongside him"
                    },
                    {
                        "characters": [
                            {
                                "character": "Jack Woltz",
                                "characterId": "/character/ch0000817/",
                                "nameId": "/name/nm0549134/"
                            }
                        ],
                        "text": "And what favours does this friend promise in exchange for giving Johnny the part?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "You've got some labour trouble coming up. My client promises to make that trouble disappear. You have a top star who makes a lot of money, but he just graduated from marijuana to heroin..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Jack Woltz",
                                "characterId": "/character/ch0000817/",
                                "nameId": "/name/nm0549134/"
                            }
                        ],
                        "stageDirection": "all East Side now",
                        "text": "Are you trying to muscle me?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "Absolutely not. I've come to ask a service for a friend..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Jack Woltz",
                                "characterId": "/character/ch0000817/",
                                "nameId": "/name/nm0549134/"
                            }
                        ],
                        "text": "Now you listen to me, you smooth-talking son-of-a-bitch, let me lay it on the line for you and your boss, whoever he is! Johnny Fontane will never get that movie! I don't care how many dago guinea wop greaseball goombahs come out of the woodwork!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "I'm German-Irish."
                    },
                    {
                        "characters": [
                            {
                                "character": "Jack Woltz",
                                "characterId": "/character/ch0000817/",
                                "nameId": "/name/nm0549134/"
                            }
                        ],
                        "text": "Well, let me tell you something, my kraut-mick friend, I'm gonna make so much trouble for you, you won t know what hit you!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "Mr. Woltz, I'm a lawyer. I have not threatened you."
                    },
                    {
                        "characters": [
                            {
                                "character": "Jack Woltz",
                                "characterId": "/character/ch0000817/",
                                "nameId": "/name/nm0549134/"
                            }
                        ],
                        "text": "I know almost every big lawyer in New York, who the hell are you?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "I have a special practice. I handle one client. Now you have my number, I'll wait for your call. By the way, I admire your pictures very much."
                    },
                    {
                        "stageDirection": "Hagen leaves, with Woltz staring after him"
                    },
                    {
                        "characters": [
                            {
                                "character": "Jack Woltz",
                                "characterId": "/character/ch0000817/",
                                "nameId": "/name/nm0549134/"
                            }
                        ],
                        "stageDirection": "to an underling",
                        "text": "Check him out..."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0554655",
                "interestingVotes": {
                    "up": 16
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "stageDirection": "to Michael",
                        "text": "So, Barzini will move against you first. He'll set up a meeting with someone that you absolutely trust, guaranteeing your safety. And at that meeting, you'll be assassinated."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361841",
                "interestingVotes": {
                    "down": 3,
                    "up": 38
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "You have to answer for Santino, Carlo. You fingered Sonny for the Barzini people."
                    },
                    {
                        "characters": [
                            {
                                "character": "Carlo Rizzi",
                                "characterId": "/character/ch0000815/",
                                "nameId": "/name/nm0751625/"
                            }
                        ],
                        "text": "Mike, you got it all wrong."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Ah, that little farce you played with my sister. You think that would fool a Corleone?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Carlo Rizzi",
                                "characterId": "/character/ch0000815/",
                                "nameId": "/name/nm0751625/"
                            }
                        ],
                        "text": "Mike, I'm innocent. I swear on the kids."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Sit down."
                    },
                    {
                        "characters": [
                            {
                                "character": "Carlo Rizzi",
                                "characterId": "/character/ch0000815/",
                                "nameId": "/name/nm0751625/"
                            }
                        ],
                        "text": "Please don't do this to me, Mike. Please don't."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Barzini is dead. So is Phillip Tattaglia. Moe Greene. Stracci. Cuneo. Today I settled all family business so don't tell me that you're innocent. Admit what you did."
                    },
                    {
                        "stageDirection": "Carlo starts sobbing"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Get him a drink. Don't be afraid, Carlo. Come on, you think I'd make my sister a widow? I'm Godfather to your son."
                    },
                    {
                        "stageDirection": "Carlo get handed a drink"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Go ahead. Drink. Drink. No, you're out of the family business, that's your punishment. You're finished. I'm putting you on a plane to Vegas. Tom?"
                    },
                    {
                        "stageDirection": "Tom hands Michael an airplane ticket"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "I want you to stay there, you understand?"
                    },
                    {
                        "stageDirection": "Carlo nods"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Only don't tell me that you're innocent. Because it insults my intelligence and it makes me very angry. Now, who approached you first? Barzini or Tattaglia?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Carlo Rizzi",
                                "characterId": "/character/ch0000815/",
                                "nameId": "/name/nm0751625/"
                            }
                        ],
                        "text": "It was Barzini."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Good. There's a car outside that will take you to the airport. I'll call your wife and tell her what flight you're on."
                    },
                    {
                        "characters": [
                            {
                                "character": "Carlo Rizzi",
                                "characterId": "/character/ch0000815/",
                                "nameId": "/name/nm0751625/"
                            }
                        ],
                        "text": "Listen, Mike..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Go on. Get out of my sight."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361907",
                "interestingVotes": {
                    "up": 15
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Virgil 'The Turk' Sollozzo",
                                "characterId": "/character/ch0395467/",
                                "nameId": "/name/nm0504803/"
                            }
                        ],
                        "text": "He's still alive. They hit him with five shots and he's still alive!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361895",
                "interestingVotes": {
                    "down": 1,
                    "up": 22
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Don Zaluchi",
                                "characterId": "/character/ch0000833/",
                                "nameId": "/name/nm0348927/"
                            }
                        ],
                        "text": "I also don't believe in drugs. For years I paid my people extra so they wouldn't do that kind of business. Somebody comes to them and says, \"I have powders; if you put up three, four thousand dollar investment, we can make fifty thousand distributing.\" So they can't resist. I want to control it as a business, to keep it respectable."
                    },
                    {
                        "stageDirection": "slams his hand on the table and shouts"
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Zaluchi",
                                "characterId": "/character/ch0000833/",
                                "nameId": "/name/nm0348927/"
                            }
                        ],
                        "text": "I don't want it near schools! I don't want it sold to children! That's an infamia. In my city, we would keep the traffic in the dark people, the coloreds. They're animals anyway, so let them lose their souls."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361897",
                "interestingVotes": {
                    "down": 1,
                    "up": 22
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "How's Paulie?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "Oh, Paulie... won't see him no more."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt2162706",
                "interestingVotes": {
                    "up": 14
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "Tom-anuch! Hey, a hundred button men on the street twenty-four hours a day. That Turk shows one hair on his ass, he's dead. Believe me."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "stageDirection": "to Michael, whose face is bruised",
                        "text": "Hey Michael, c'mere. Let me look at you. You look beautiful, just beautiful, you're gorgeous. Hey, listen to this. The Turk, he wants to talk. You imagine the nerve on this son of a bitch, hey? Craps out last night he wants a meetin' today."
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "What did he say?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "What did he say? Badda-beep, badda-bap, badda-boop, badda-beep, he wants us to send Michael to hear the proposition, and the promise is the deal is so good we can't refuse. Hey."
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "What about Bruno Tattaglia?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "That's part of the deal. Bruno cancels out what they did to my father."
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "Sonny, we ought to hear what they have to say."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "No, no, no! No more! Not this time, Consigliere! No more meetin's! No more discussions! No more Sollozzo tricks! You give 'em one message - I want Sollozzo. If not, it's all-out war, we go to the mattresses."
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "Some of the other families won't sit still for all-out war!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "Then they hand me Sollozzo!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "Your father would want to hear this. This is business, not personal."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "They shot my father? It's business, your ass."
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "Even the shooting of your father was business, not personal, Sonny!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "Well then, business will have to suffer, all right? And listen, do me a favor, Tom. No more advice on how to patch things up, just help me win, please. All right?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "I found out about this Captain McClusky who broke Mike's jaw."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "What about him?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "Now, he's definitely on Sollozzo's payroll and for big money. McClusky has agreed to be the Turk's bodyguard. What you have to understand, Sonny, is that while Sollozzo's being guarded like this he is invulnerable. Now, nobody has ever gunned down a New York police captain. Never. It would be disastrous. All the five families would come after you, Sonny. The Corleone Family would be outcast. Even the old man's political protection would run for cover. So, do me a favor, take this into consideration."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "All right, we wait."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "It can't wait."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "Huh?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "It can't wait. I don't care what Sollozzo says about a deal, he's gonna kill Pop. That's it. That's a key for him. Gotta get Sollozzo."
                    },
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "Mikey's right."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "Let me ask you something, Professor. I mean, what about this McClusky, huh? What do we do with this cop here?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "They want to have a meeting with me, right? It will be me, McClusky and Sollozzo. Let's set the meeting. Get our informants to find out where it's going to be held. Now we insist it's a public place - a bar or a restaurant, some place where there's people there so I'll feel safe. They're going to search me when I first meet them, right? So I can't have a weapon on me then. But if Clemenza can figure a way to have a weapon planted there for me, then I'll kill them both."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "stageDirection": "Clemenza, Tessio and Sonny laugh",
                        "text": "Hey. What are you gonna do? Nice college boy, huh? Didn't want to get mixed up in the family business? Now you want to gun down a police captain, what, 'cause he slapped you in the face a little bit, huh? What do you think, this the Army where you shoot 'em a mile away? No, you gotta get up close like this - badda-bing! - you blow their brains all over your nice Ivy League suit. C'mere."
                    },
                    {
                        "stageDirection": "Kisses Michael on the head"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "You're taking this very personal. Tom, this is business and this man is taking it very, very personal."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361913",
                "interestingVotes": {
                    "down": 1,
                    "up": 21
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "I have to get back to work. It's part of the wedding. No Sicilian can ever refuse a request on his daughter's wedding day."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361847",
                "interestingVotes": {
                    "up": 13
                },
                "lines": [
                    {
                        "stageDirection": "delivering his rehearsed speech"
                    },
                    {
                        "characters": [
                            {
                                "character": "Luca Brasi",
                                "characterId": "/character/ch0000820/",
                                "nameId": "/name/nm0598926/"
                            }
                        ],
                        "text": "Don Corleone, I am honored and grateful that you have invited me to your daughter... 's wedding... on the day of your daughter's wedding. And I hope their first child be a masculine child. I pledge my ever-ending loyalty."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361845",
                "interestingVotes": {
                    "down": 1,
                    "up": 19
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Tessio",
                                "characterId": "/character/ch0000806/",
                                "nameId": "/name/nm0001820/"
                            }
                        ],
                        "text": "Barzini's people chisle my territory and we do nothing about it. Pretty soon there won't be anyplace in Brooklyn that I can hang my hat."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Try and be patient."
                    },
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "I'm not asking for help, Mike, just take off the handcuffs."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Be patient."
                    },
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "We gotta protect ourselves. At least give me the chance to recruit some new men."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "No. I don't want to give Barzini any excuse to start fighting."
                    },
                    {
                        "characters": [
                            {
                                "character": "Tessio",
                                "characterId": "/character/ch0000806/",
                                "nameId": "/name/nm0001820/"
                            }
                        ],
                        "text": "Mike, you're wrong."
                    },
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "Don Corleone, you once said the day would come when me and Tessio could form our own families. Until today I would never think of such a thing but now I must ask your permission."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "Well, Michael's head of the family now and if give his permission then you have my blessing."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "After we make the move to Nevada you can break off from the Corleone Family and go off on your own. After we make the move to Nevada."
                    },
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "How long will that take?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Six months."
                    },
                    {
                        "characters": [
                            {
                                "character": "Tessio",
                                "characterId": "/character/ch0000806/",
                                "nameId": "/name/nm0001820/"
                            }
                        ],
                        "text": "Forgive me, Godfather, but with you gone me and Pete will come under Barzini's thumb sooner or later."
                    },
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "And I hate that Goddamn Barzini. In six months time there won't be nothin' left to build on."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "Do you have faith in my judgement?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "Yes."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "Do I have your loyalty?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "Yes, always Godfather."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "Then be a friend to Michael. Do as he says."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "There are negotiations being made that are going to answer all of your questions and solve all of your problems. That's all I can tell you right now. Carlo, you grew up in Nevada. When we make our move there you're going to be my right hand man. Tom Hagen is no longer Consigliari. He's going to be our lawyer in Vegas. That's no reflection on Tom it's just the way I want it. Besides, if I ever help who's a better Consigliari than my father. That's it."
                    },
                    {
                        "stageDirection": "Everyone except Hagen leaves"
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "Mike, why am I out?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "You're not a wartime Consigliari, Tom. Things could get rough with the move we're making."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "Tom, I advised Michael. I never thought you were a bad Consigliari. I thought Santino was a bad Don, rest in peace. Michael has all my confidence as do you. But there are reasons why you must have nothing to do with what's going to happen."
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "Maybe I could help."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "You're out, Tom."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361883",
                "interestingVotes": {
                    "down": 1,
                    "up": 19
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "Hey, whaddya gonna do, nice college boy, eh? Didn't want to get mixed up in the Family business, huh? Now you wanna gun down a police captain. Why? Because he slapped ya in the face a little bit? Hah? What do you think this is the Army, where you shoot 'em a mile away? You've gotta get up close like this and - bada-BING! - you blow their brains all over your nice Ivy League suit. C'mere..."
                    },
                    {
                        "stageDirection": "kisses Michael's head"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Sonny..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "You're taking this very personal. Tom, this is business and this man is taking it very, very personal."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361916",
                "interestingVotes": {
                    "down": 1,
                    "up": 19
                },
                "lines": [
                    {
                        "stageDirection": "as Tessio and Hagen walk to Michael's house, they are met by a bodyguard, Willi Cicci"
                    },
                    {
                        "characters": [
                            {
                                "character": "Willi Cicci",
                                "characterId": "/character/ch0000813/",
                                "nameId": "/name/nm0818874/"
                            }
                        ],
                        "text": "Sal... Tom... the boss says he'll come in a separate car. He says for you two to go on ahead."
                    },
                    {
                        "characters": [
                            {
                                "character": "Tessio",
                                "characterId": "/character/ch0000806/",
                                "nameId": "/name/nm0001820/"
                            }
                        ],
                        "text": "Hell, he can't do that; that screws up all my arrangements."
                    },
                    {
                        "characters": [
                            {
                                "character": "Willi Cicci",
                                "characterId": "/character/ch0000813/",
                                "nameId": "/name/nm0818874/"
                            }
                        ],
                        "text": "Well, that's what he said."
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "I can't go with you either, Tessio."
                    },
                    {
                        "stageDirection": "just then, Michael's bodyguards materialize around them, Tessio understands everything"
                    },
                    {
                        "characters": [
                            {
                                "character": "Tessio",
                                "characterId": "/character/ch0000806/",
                                "nameId": "/name/nm0001820/"
                            }
                        ],
                        "stageDirection": "to Hagen",
                        "text": "Tell Mike it was only business. I always liked him."
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "He understands that."
                    },
                    {
                        "characters": [
                            {
                                "character": "Willi Cicci",
                                "characterId": "/character/ch0000813/",
                                "nameId": "/name/nm0818874/"
                            }
                        ],
                        "stageDirection": "removing Tessio's gun",
                        "text": "Excuse me, Sally."
                    },
                    {
                        "characters": [
                            {
                                "character": "Tessio",
                                "characterId": "/character/ch0000806/",
                                "nameId": "/name/nm0001820/"
                            }
                        ],
                        "text": "Can you get me off the hook, Tom? For old times' sake?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "stageDirection": "shakes his head",
                        "text": "Can't do it, Sally."
                    },
                    {
                        "stageDirection": "Hagen watches sadly as Tessio is led by Cicci and the others to a waiting car"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361889",
                "interestingVotes": {
                    "down": 1,
                    "up": 18
                },
                "lines": [
                    {
                        "stageDirection": "after Sonny beats up Carlo Rizzi for hitting Connie"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "You touch my sister again, I'll kill you."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0559670",
                "interestingVotes": {
                    "down": 1,
                    "up": 17
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "Did he... did Clemenza tell you to drop the gun?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Yeah, a million times."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361870",
                "interestingVotes": {
                    "up": 11
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Emilio Barzini",
                                "characterId": "/character/ch0284602/",
                                "nameId": "/name/nm0002017/"
                            }
                        ],
                        "stageDirection": "during a meeting with the Five Families",
                        "text": "Times have changed. It's not like the Old Days, when we can do anything we want. A refusal is not the act of a friend. If Don Corleone had all the judges, and the politicians in New York, then he must share them, or let us others use them. He must let us draw the water from the well. Certainly he can present a bill for such services; after all... we are not Communists."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361882",
                "interestingVotes": {
                    "up": 11
                },
                "lines": [
                    {
                        "stageDirection": "speaking with the father of the girl he plans to marry, and after telling him that he's in hiding from some gangsters"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Some people will pay a lot of money for that information; but then your daughter would lose a father, instead of gaining a husband."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361891",
                "interestingVotes": {
                    "down": 1,
                    "up": 16
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Connie",
                                "characterId": "/character/ch0440490/",
                                "nameId": "/name/nm0001735/"
                            }
                        ],
                        "stageDirection": "shrieking at Michael",
                        "text": "You killed my husband! You waited until our father died so nobody could stop you and you killed him! You killed him! You blamed him for Sonny, you always did, everybody did. But you never thought about me. You never gave a dam about me. What am I going to do now?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Kay Adams",
                                "characterId": "/character/ch0000793/",
                                "nameId": "/name/nm0000473/"
                            }
                        ],
                        "stageDirection": "taking Connie in her arms",
                        "text": "Connie..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Connie",
                                "characterId": "/character/ch0440490/",
                                "nameId": "/name/nm0001735/"
                            }
                        ],
                        "text": "Why do you think he kept Carlo at the mall? All the time he knew he was going to kill him. And then he stood Godfather to our baby. You think you know your husband? You know how many men he had killed! Read the papers. Read the papers! That's your husband!"
                    },
                    {
                        "stageDirection": "Michael takes Connie into her arms, but she goes wild again and tries to attack him"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael Corleone",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Take her upstairs. Get her a doctor."
                    },
                    {
                        "stageDirection": "Michael's bodyguards grab Connie and pull her out of the office"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael Corleone",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "stageDirection": "to Kay",
                        "text": "She's hysterical."
                    },
                    {
                        "characters": [
                            {
                                "character": "Kay Adams",
                                "characterId": "/character/ch0000793/",
                                "nameId": "/name/nm0000473/"
                            }
                        ],
                        "text": "Is it true?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael Corleone",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Don't ask me about my business, Kay."
                    },
                    {
                        "characters": [
                            {
                                "character": "Kay Adams",
                                "characterId": "/character/ch0000793/",
                                "nameId": "/name/nm0000473/"
                            }
                        ],
                        "text": "Is it true?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael Corleone",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Don't ask me about my business..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Kay Adams",
                                "characterId": "/character/ch0000793/",
                                "nameId": "/name/nm0000473/"
                            }
                        ],
                        "text": "No..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael Corleone",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "stageDirection": "slams the desk",
                        "text": "ENOUGH!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361868",
                "interestingVotes": {
                    "up": 10
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Capt. McCluskey",
                                "characterId": "/character/ch0000808/",
                                "nameId": "/name/nm0001330/"
                            }
                        ],
                        "text": "I thought I got all you Guinea hoods locked up! What the hell are you doing here?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "What happened to the men who were guarding my father, Captain?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Capt. McCluskey",
                                "characterId": "/character/ch0000808/",
                                "nameId": "/name/nm0001330/"
                            }
                        ],
                        "text": "I pulled them guys off of here, eh, now get away from this hospital!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "I'm not leaving until you put some guards around my father's room."
                    },
                    {
                        "characters": [
                            {
                                "character": "Capt. McCluskey",
                                "characterId": "/character/ch0000808/",
                                "nameId": "/name/nm0001330/"
                            }
                        ],
                        "text": "Phil, take him in!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Cop with Capt. McCluskey outside hospital",
                                "nameId": "/name/nm0343780/"
                            }
                        ],
                        "text": "The kid's clean Captain, he's a war hero! He's never been mixed up with the rackets..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Capt. McCluskey",
                                "characterId": "/character/ch0000808/",
                                "nameId": "/name/nm0001330/"
                            }
                        ],
                        "text": "Goddamn it Phil, I said take him in!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "What's the Turk paying you to set up my father, Captain?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Capt. McCluskey",
                                "characterId": "/character/ch0000808/",
                                "nameId": "/name/nm0001330/"
                            }
                        ],
                        "stageDirection": "to Patrolmen",
                        "text": "Take a hold of him. Stand him up. Stand him up straight."
                    },
                    {
                        "stageDirection": "punches Michael and breaks his jaw"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361915",
                "interestingVotes": {
                    "up": 10
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "stageDirection": "teaching Apollonia to drive",
                        "text": "It's safer to teach you English!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0502378",
                "interestingVotes": {
                    "up": 10
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "The Senator called, he apologized for not coming but said that you would understand; also some of the judges. They've all sent gifts."
                    },
                    {
                        "stageDirection": "raises his glass to the Don"
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "Salut."
                    },
                    {
                        "stageDirection": "Both men are suiddenly startled by a huge roaring cheer"
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "What is that, outside?"
                    },
                    {
                        "stageDirection": "Both look out the window and see famous singer Johnny Fontane has arrived"
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "He came all the way from California to the wedding. i told you he was gonna come!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "It's been two years. He's probably in trouble again."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "He is a good godson."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361869",
                "interestingVotes": {
                    "down": 1,
                    "up": 14
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Sollozzo",
                                "characterId": "/character/ch0395467/",
                                "nameId": "/name/nm0504803/"
                            }
                        ],
                        "stageDirection": "to Michael, in Sicilian",
                        "text": "I am sorry. What happened to your father was business. I have much respect for your father. But your father, his thinking is old-fashioned. You must understand why I had to do that. Now let's work through where we go from here."
                    },
                    {
                        "stageDirection": "Michael tries speaking in Sicilian, but can't express himself properly, so with a quick look at McCluskey they both switch to English"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "What I want... what's most important to me is that I have a guarantee: no more attempts on my father's life."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sollozzo",
                                "characterId": "/character/ch0395467/",
                                "nameId": "/name/nm0504803/"
                            }
                        ],
                        "text": "What guarantees could I give you, Mike? I'm the hunted one. I've missed my chance. You think too much of me, kid. I am not that clever. All I want is a truce."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "I have to go to the bathroom. Is that all right?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Capt. McCluskey",
                                "characterId": "/character/ch0000808/",
                                "nameId": "/name/nm0001330/"
                            }
                        ],
                        "text": "You gotta go, you gotta go."
                    },
                    {
                        "stageDirection": "Michael gets up, but a suspicious Sollozzo probes Michael's crotch, to Michael's offense"
                    },
                    {
                        "characters": [
                            {
                                "character": "Capt. McCluskey",
                                "characterId": "/character/ch0000808/",
                                "nameId": "/name/nm0001330/"
                            }
                        ],
                        "text": "I frisked him. He's clean."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sollozzo",
                                "characterId": "/character/ch0395467/",
                                "nameId": "/name/nm0504803/"
                            }
                        ],
                        "text": "Don't take too long..."
                    },
                    {
                        "stageDirection": "Michael heads to the bathroom"
                    },
                    {
                        "characters": [
                            {
                                "character": "Capt. McCluskey",
                                "characterId": "/character/ch0000808/",
                                "nameId": "/name/nm0001330/"
                            }
                        ],
                        "stageDirection": "to Sollozzo",
                        "text": "I frisked a thousand young punks."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0539487",
                "interestingVotes": {
                    "up": 9
                },
                "lines": [
                    {
                        "stageDirection": "Michael gets ready to leave the house"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "Where're you going?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "To the City."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "stageDirection": "to Clemenza",
                        "text": "Yeah? Well, send somebody with him."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "No, I'm just gonna go see Pop."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "I don't care, send some bodyguards with him."
                    },
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "He'll be all right. Sollozzo knows he's a civilian."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "Yeah? Well take care, all right?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Yes, sir."
                    },
                    {
                        "stageDirection": "Michael leaves"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "Send someone with him anyway..."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0559671",
                "interestingVotes": {
                    "up": 9
                },
                "lines": [
                    {
                        "stageDirection": "Tom Hagen goes Christmas shopping, and meets Sollozzo"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sollozzo",
                                "characterId": "/character/ch0395467/",
                                "nameId": "/name/nm0504803/"
                            }
                        ],
                        "text": "I want to talk to you."
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "stageDirection": "stepping aside",
                        "text": "I haven't got time..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sollozzo",
                                "characterId": "/character/ch0395467/",
                                "nameId": "/name/nm0504803/"
                            }
                        ],
                        "text": "Make time, Consigliore!"
                    },
                    {
                        "stageDirection": "Hagen finds himself trapped between Sollozzo and a hood"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sollozzo",
                                "characterId": "/character/ch0395467/",
                                "nameId": "/name/nm0504803/"
                            }
                        ],
                        "text": "What are you worried about? If I wanted to kill you you'd be dead already. Get in."
                    },
                    {
                        "stageDirection": "a car drives up"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361849",
                "interestingVotes": {
                    "up": 8
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "Goddamn FBI don't respect nothin'."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361866",
                "interestingVotes": {
                    "up": 8
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "I'm an attorney for the Corleone family. These men are private detectives hired to protect Vito Corleone. They are licensed to carry firearms. If you interfere you'll have to appear before a judge in the morning and show cause."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt1450341",
                "interestingVotes": {
                    "down": 3,
                    "up": 19
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "stageDirection": "crying, staring at Sonny's body",
                        "text": "Look how they massacred my boy!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361893",
                "interestingVotes": {
                    "up": 7
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "Damn it, Sonny's running scared. He's thinking of going to the matresses already. We got to go pick up some stuff at this address. You know any good spots on the west side?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Paulie Gatto",
                                "characterId": "/character/ch0000834/",
                                "nameId": "/name/nm0553908/"
                            }
                        ],
                        "text": "Yeah, I'll think about it."
                    },
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "Well, think about it while you're driving, will ya? I wanna hit New York sometime this month. And watch out for the kids when you're backing out!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0554648",
                "interestingVotes": {
                    "up": 7
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "You gonna kill all those guys?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "Hey, Mikey, stay out of this, all right?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0533206",
                "interestingVotes": {
                    "down": 1,
                    "up": 10
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Fabrizzio, where are you going?"
                    },
                    {
                        "stageDirection": "Apollonia hoots the car and starts to drive it; Fabrizzio gives a quick, furtive movement..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "NO! NO APOLLONIA!"
                    },
                    {
                        "stageDirection": "the car explodes"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361846",
                "interestingVotes": {
                    "down": 2,
                    "up": 13
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Fredo, who are the girls?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Fredo",
                                "characterId": "/character/ch0000801/",
                                "nameId": "/name/nm0001030/"
                            }
                        ],
                        "text": "That's for you to find out."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Get rid of them, Fredo."
                    },
                    {
                        "characters": [
                            {
                                "character": "Fredo",
                                "characterId": "/character/ch0000801/",
                                "nameId": "/name/nm0001030/"
                            }
                        ],
                        "text": "Hey, Mike, uh..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "I'm here on business I leave tomorrow now get rid of them. Come on, I'm tired. Get rid of the band, too."
                    },
                    {
                        "stageDirection": "Fredo chases everyone out of the room"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "What happened to Moe Greene?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Fredo",
                                "characterId": "/character/ch0000801/",
                                "nameId": "/name/nm0001030/"
                            }
                        ],
                        "text": "He had business. He said give him a call. Once the party started."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Well, give him a call. Hello, Johnny."
                    },
                    {
                        "characters": [
                            {
                                "character": "Johnny Fontane",
                                "characterId": "/character/ch0000822/",
                                "nameId": "/name/nm0553887/"
                            }
                        ],
                        "text": "Mike, it's nice to see you again."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "We're all proud of you. Sit down, Johnny, I want to talk to you. The Don's proud of you, too."
                    },
                    {
                        "characters": [
                            {
                                "character": "Johnny Fontane",
                                "characterId": "/character/ch0000822/",
                                "nameId": "/name/nm0553887/"
                            }
                        ],
                        "text": "Well, I owe it all to him."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "He knows how grateful you are. That's why he'd like to ask a favor."
                    },
                    {
                        "characters": [
                            {
                                "character": "Johnny Fontane",
                                "characterId": "/character/ch0000822/",
                                "nameId": "/name/nm0553887/"
                            }
                        ],
                        "text": "Mike, what can I do?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "The Corleone family is thinking of giving up all of its interest in the olive oil business, settling out here. Now Moe Greene will sell us his share of the hotel and the casino so that it can be completely owned by the family. Tom."
                    },
                    {
                        "stageDirection": "Hagen hands Michael some papers"
                    },
                    {
                        "characters": [
                            {
                                "character": "Fredo",
                                "characterId": "/character/ch0000801/",
                                "nameId": "/name/nm0001030/"
                            }
                        ],
                        "text": "Hey, Mike, are you sure about that? I mean, Moe, loves the business. He never said anything to me about sellin'."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "I'll make him an offer he can't refuse. You see, Johnny, we feel that entertainment is going to be a big factor in drawing gamblers into the casinos. We're hoping that you'll sign a contract agreeing to appear 5 times a year. Perhaps convince some of your friends in the movies to do the same. We're counting on you, Johnny."
                    },
                    {
                        "characters": [
                            {
                                "character": "Johnny Fontane",
                                "characterId": "/character/ch0000822/",
                                "nameId": "/name/nm0553887/"
                            }
                        ],
                        "text": "Sure, Mike, I'll do anything for my Godfather. You know that."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Good."
                    },
                    {
                        "characters": [
                            {
                                "character": "Moe Greene",
                                "characterId": "/character/ch0000809/",
                                "nameId": "/name/nm0733678/"
                            }
                        ],
                        "text": "Hey, Mike! Everybody's here. There's Tom. Freddie. Good to see you, Mike."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "How are you, Moe?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Moe Greene",
                                "characterId": "/character/ch0000809/",
                                "nameId": "/name/nm0733678/"
                            }
                        ],
                        "text": "You got everything you need? The chef cooked for you special, the dancers will kick your tongue out and your credit is good. Draw chips for everyone in the room so they can play on the house."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361839",
                "interestingVotes": {
                    "up": 6
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "I have to see my father and his people so have dinner without me."
                    },
                    {
                        "characters": [
                            {
                                "character": "Kay Adams",
                                "characterId": "/character/ch0000793/",
                                "nameId": "/name/nm0000473/"
                            }
                        ],
                        "text": "Oh, Michael."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "This weekend we'll go out. We'll go to the city, see a show and have dinner, I promise."
                    },
                    {
                        "characters": [
                            {
                                "character": "Kay Adams",
                                "characterId": "/character/ch0000793/",
                                "nameId": "/name/nm0000473/"
                            }
                        ],
                        "text": "Hmmmm. Michael. Michael, wait, your sister wants to ask you something."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Well, let her ask."
                    },
                    {
                        "characters": [
                            {
                                "character": "Kay Adams",
                                "characterId": "/character/ch0000793/",
                                "nameId": "/name/nm0000473/"
                            }
                        ],
                        "text": "No, she's afraid to. Connie and Carlo want you to be Godfather to their little boy."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "We'll see."
                    },
                    {
                        "characters": [
                            {
                                "character": "Kay Adams",
                                "characterId": "/character/ch0000793/",
                                "nameId": "/name/nm0000473/"
                            }
                        ],
                        "text": "Will you?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Let me think about it. We'll see."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361908",
                "interestingVotes": {
                    "up": 5
                },
                "lines": [
                    {
                        "stageDirection": "Clemenza and Michael arrive to find extra guards posted outside the house"
                    },
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "What's with all the new faces?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Tessio",
                                "characterId": "/character/ch0000806/",
                                "nameId": "/name/nm0001820/"
                            }
                        ],
                        "text": "We'll need 'em now. After the hospital thing, Sonny got mad. We hit Bruno Tattaglia at four o'clock this morning."
                    },
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "...Jesus Christ."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0560116",
                "interestingVotes": {
                    "up": 5
                },
                "lines": [
                    {
                        "stageDirection": "Paulie enters the Corleones' study"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "What is it?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "Hey, Paulie, I thought I told you to stay put."
                    },
                    {
                        "characters": [
                            {
                                "character": "Paulie Gatto",
                                "characterId": "/character/ch0000834/",
                                "nameId": "/name/nm0553908/"
                            }
                        ],
                        "text": "The guy at the gate says there's a package."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "Yeah? Hey, Tessio, go see what it is."
                    },
                    {
                        "characters": [
                            {
                                "character": "Paulie Gatto",
                                "characterId": "/character/ch0000834/",
                                "nameId": "/name/nm0553908/"
                            }
                        ],
                        "text": "You want me to hang around?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "Yeah, hang around. You all right?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Paulie Gatto",
                                "characterId": "/character/ch0000834/",
                                "nameId": "/name/nm0553908/"
                            }
                        ],
                        "stageDirection": "coughing",
                        "text": "Yeah, yeah..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "You hungry? There's a little food in the ice box."
                    },
                    {
                        "characters": [
                            {
                                "character": "Paulie Gatto",
                                "characterId": "/character/ch0000834/",
                                "nameId": "/name/nm0553908/"
                            }
                        ],
                        "text": "Nah, nah."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "Well, how about a drink? Some brandy, it'll sweat it out of ya. Alright, babe..."
                    },
                    {
                        "stageDirection": "Paulie leaves"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "stageDirection": "to Clemenza",
                        "text": "I want you to take care of that sonofabitch right away. Paulie sold out the old man, that stronz. I don't want to see him no more. I want you to make that first thing on your list, understand?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "Understood."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361873",
                "interestingVotes": {
                    "down": 1,
                    "up": 8
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "You know how they're going to come at you?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "They want to arrange a meeting between me and Barzini. On Tessio's ground. Where I'll be safe."
                    },
                    {
                        "stageDirection": "Hagen is silent for a long moment"
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "Tessio. I always thought it would be Clemenza."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "It's the smart move. Tessio was always smarter."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361906",
                "interestingVotes": {
                    "down": 1,
                    "up": 8
                },
                "lines": [
                    {
                        "stageDirection": "the Corleone Family poses for the wedding photo"
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "stageDirection": "to Sonny",
                        "text": "Where's Michael?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "text": "Don't worry. He'll be here."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "We're not taking the picture without Michael."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0554652",
                "interestingVotes": {
                    "down": 1,
                    "up": 7
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "How's your boy?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "He's good."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "You know, he looks more like you every day."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "He's smarter than I am. Three years old, and he can already read the funny papers."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "stageDirection": "laughs",
                        "text": "Read the funny papers..."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361898",
                "interestingVotes": {
                    "down": 2,
                    "up": 9
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Connie",
                                "characterId": "/character/ch0440490/",
                                "nameId": "/name/nm0001735/"
                            }
                        ],
                        "text": "Dinner's on the table."
                    },
                    {
                        "characters": [
                            {
                                "character": "Carlo Rizzi",
                                "characterId": "/character/ch0000815/",
                                "nameId": "/name/nm0751625/"
                            }
                        ],
                        "text": "I'm not hungry yet."
                    },
                    {
                        "characters": [
                            {
                                "character": "Connie",
                                "characterId": "/character/ch0440490/",
                                "nameId": "/name/nm0001735/"
                            }
                        ],
                        "text": "Your food is on the table. It's getting cold."
                    },
                    {
                        "characters": [
                            {
                                "character": "Carlo Rizzi",
                                "characterId": "/character/ch0000815/",
                                "nameId": "/name/nm0751625/"
                            }
                        ],
                        "text": "I'll eat out later."
                    },
                    {
                        "characters": [
                            {
                                "character": "Connie",
                                "characterId": "/character/ch0440490/",
                                "nameId": "/name/nm0001735/"
                            }
                        ],
                        "text": "You just told me to make you dinner!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Carlo Rizzi",
                                "characterId": "/character/ch0000815/",
                                "nameId": "/name/nm0751625/"
                            }
                        ],
                        "text": "Hey, vaffanculo, eh?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Connie",
                                "characterId": "/character/ch0440490/",
                                "nameId": "/name/nm0001735/"
                            }
                        ],
                        "text": "Aw, vaffanculo you!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361904",
                "interestingVotes": {
                    "up": 4
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "You and I are going to move my father to another room, now can you disconnect those tubes so we can move the bed out of here?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Night Nurse",
                                "characterId": "/character/ch0049920/",
                                "nameId": "/name/nm0605866/"
                            }
                        ],
                        "text": "That is out of the question."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "You know my father? Men are coming here to kill him, now help me, please."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0539488",
                "interestingVotes": {
                    "up": 4
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "The negotiator's at my house playing pinochle with some of my men, he's happy. They're letting him win."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0554647",
                "interestingVotes": {
                    "up": 4
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "stageDirection": "to Luca Brasi",
                        "text": "I'm a little worried about this Sollozzo fellow. I want you to find out what he's got under his fingernails. Go to the Tattaglias, and tell them you're not too happy with our Family, and find out what you can..."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0554649",
                "interestingVotes": {
                    "up": 4
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Tom Hagen",
                                "characterId": "/character/ch0000792/",
                                "nameId": "/name/nm0000380/"
                            }
                        ],
                        "text": "Maybe we shouldn't get Mike mixed up in this too directly..."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt3471220",
                "interestingVotes": {
                    "up": 4
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Sollozzo",
                                "characterId": "/character/ch0395467/",
                                "nameId": "/name/nm0504803/"
                            }
                        ],
                        "text": "I'm glad you came, Mike. I hope we can straighten everything out. I mean, this is terrible... it's not the way I wanted things to go at all. It should've never happened."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "We'll straighten everything out tonight. I don't want my father bothered anymore."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sollozzo",
                                "characterId": "/character/ch0395467/",
                                "nameId": "/name/nm0504803/"
                            }
                        ],
                        "text": "He won't be, Mike. I swear on my children he won't be. But you gotta keep an open mind when we talk. I mean, I hope you're not a hothead like your brother Sonny. You can't talk business with him."
                    },
                    {
                        "characters": [
                            {
                                "character": "Capt. McCluskey",
                                "characterId": "/character/ch0000808/",
                                "nameId": "/name/nm0001330/"
                            }
                        ],
                        "text": "Ahh, he's a good kid. I'm sorry about the other night, Mike."
                    },
                    {
                        "stageDirection": "Shakes Michael's hand"
                    },
                    {
                        "characters": [
                            {
                                "character": "Capt. McCluskey",
                                "characterId": "/character/ch0000808/",
                                "nameId": "/name/nm0001330/"
                            }
                        ],
                        "text": "I gotta frisk you, so turn around, on your knees facing me."
                    },
                    {
                        "stageDirection": "Michael turns around, McCluskey frisks him"
                    },
                    {
                        "characters": [
                            {
                                "character": "Capt. McCluskey",
                                "characterId": "/character/ch0000808/",
                                "nameId": "/name/nm0001330/"
                            }
                        ],
                        "text": "I guess I'm getting too old for my job. Too grouchy... can't stand the aggravation. You know how it is."
                    },
                    {
                        "stageDirection": "to Sollozzo"
                    },
                    {
                        "characters": [
                            {
                                "character": "Capt. McCluskey",
                                "characterId": "/character/ch0000808/",
                                "nameId": "/name/nm0001330/"
                            }
                        ],
                        "text": "He's clean."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0539490",
                "interestingVotes": {
                    "down": 1,
                    "up": 6
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "My godson has come all the way from California. Give him a drink."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0554650",
                "interestingVotes": {
                    "down": 1,
                    "up": 6
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "I like to drink wine more than I used to..."
                    },
                    {
                        "stageDirection": "pause"
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "Anyway, I'm drinking more."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "It's good for you, Pop."
                    },
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "Ah, I don't know..."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0560115",
                "interestingVotes": {
                    "up": 3
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Clemenza",
                                "characterId": "/character/ch0000812/",
                                "nameId": "/name/nm0144710/"
                            }
                        ],
                        "text": "Paulie, pull over, I gotta take a leak."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt2619549",
                "interestingVotes": {
                    "up": 3
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "stageDirection": "the car that Michael, Sollozzo, and McClusky are riding in takes an unexpected detour",
                        "text": "New Jersey... we're going to New Jersey?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sollozzo",
                                "characterId": "/character/ch0395467/",
                                "nameId": "/name/nm0504803/"
                            }
                        ],
                        "stageDirection": "sinister",
                        "text": "Maybe."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt5052508",
                "interestingVotes": {
                    "up": 3
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Michael Corleone",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "I'm working for my father now, Kay. He's been sick -- very sick."
                    },
                    {
                        "characters": [
                            {
                                "character": "Kay Adams",
                                "characterId": "/character/ch0000793/",
                                "nameId": "/name/nm0000473/"
                            }
                        ],
                        "text": "But you are not like him, Michael. I thought you weren't going to become a man like your father. That's what you told me."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael Corleone",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "My father's no different than any other powerful man - any man who's responsible for other people, like a senator or a president..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Kay Adams",
                                "characterId": "/character/ch0000793/",
                                "nameId": "/name/nm0000473/"
                            }
                        ],
                        "text": "You know how naïve you sound?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael Corleone",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Why?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Kay Adams",
                                "characterId": "/character/ch0000793/",
                                "nameId": "/name/nm0000473/"
                            }
                        ],
                        "text": "Senators and presidents don't have men killed."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael Corleone",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Oh, who's being naïve, Kay?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0533205",
                "interestingVotes": {
                    "down": 1,
                    "up": 4
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Connie",
                                "characterId": "/character/ch0440490/",
                                "nameId": "/name/nm0001735/"
                            }
                        ],
                        "text": "What's the matter, Carlo?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Carlo Rizzi",
                                "characterId": "/character/ch0000815/",
                                "nameId": "/name/nm0751625/"
                            }
                        ],
                        "stageDirection": "punk sore at the world",
                        "text": "Shut up and set the table!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt6493221",
                "interestingVotes": {
                    "up": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Don Corleone",
                                "characterId": "/character/ch0000791/",
                                "nameId": "/name/nm0000008/"
                            }
                        ],
                        "text": "A friend should always underestimate your virtues and an enemy overestimate your faults"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt0361894",
                "interestingVotes": {
                    "down": 6,
                    "up": 4
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Capt. McCluskey",
                                "characterId": "/character/ch0000808/",
                                "nameId": "/name/nm0001330/"
                            }
                        ],
                        "text": "How's the Italian food in this restaurant?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sollozzo",
                                "characterId": "/character/ch0395467/",
                                "nameId": "/name/nm0504803/"
                            }
                        ],
                        "text": "Good. Try the veal, it's the best in the city."
                    },
                    {
                        "characters": [
                            {
                                "character": "Capt. McCluskey",
                                "characterId": "/character/ch0000808/",
                                "nameId": "/name/nm0001330/"
                            }
                        ],
                        "text": "I'll have it."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt6249783",
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "An attractive man and a professional lover"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt6615111",
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Kay Adams",
                                "characterId": "/character/ch0000793/",
                                "nameId": "/name/nm0000473/"
                            }
                        ],
                        "text": "Would you like me more if I were Ingrid Bergman?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "Now there's a thought..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Kay Adams",
                                "characterId": "/character/ch0000793/",
                                "nameId": "/name/nm0000473/"
                            }
                        ],
                        "text": "Michael..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Michael",
                                "characterId": "/character/ch0000790/",
                                "nameId": "/name/nm0000199/"
                            }
                        ],
                        "text": "No, I would not like you more if you were Ingrid Bergman."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0068646/quotes/qt3771942",
                "interestingVotes": {
                    "down": 3,
                    "up": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Sonny",
                                "characterId": "/character/ch0262983/",
                                "nameId": "/name/nm0001001/"
                            }
                        ],
                        "stageDirection": "On his was to his car to go and take care of Carlo; to his bodyguards that were just sitting around",
                        "text": "Get up! Do something!"
                    }
                ],
                "spoiler": false
            }
        ]
    }
const QUOTE = {
    "id": "/title/tt0944947/",
    "base": {
    "@type": "imdb.api.title.base",
        "id": "/title/tt0944947/",
        "image": {
        "height": 1500,
            "id": "/title/tt0944947/images/rm4204167425",
            "url": "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
            "width": 1102
    },
    "title": "Game of Thrones",
        "titleType": "tvSeries",
        "year": 2011
},
    "quotes": [
    {
        "id": "/title/tt0944947/quotes/qt3089613",
        "interestingVotes": {
            "down": 4,
            "up": 545
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Tywin Lannister",
                        "characterId": "/character/ch0242185/",
                        "nameId": "/name/nm0001097/"
                    }
                ],
                "text": "Any man who must say \"I am the king\" is no true king."
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt2025967",
        "interestingVotes": {
            "down": 25,
            "up": 1863
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Cersei Lannister",
                        "characterId": "/character/ch0159526/",
                        "nameId": "/name/nm0372176/"
                    }
                ],
                "text": "When you play the game of thrones, you win or you die. There is no middle ground."
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt2415571",
        "interestingVotes": {
            "down": 12,
            "up": 1047
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Tywin Lannister",
                        "characterId": "/character/ch0242185/",
                        "nameId": "/name/nm0001097/"
                    }
                ],
                "text": "A lion does not concern himself with the opinion of sheep."
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt1981907",
        "interestingVotes": {
            "down": 27,
            "up": 1549
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Ramsay Snow",
                        "characterId": "/character/ch0321004/",
                        "nameId": "/name/nm3701064/"
                    }
                ],
                "text": "If you think this has a happy ending, you haven't been paying attention."
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt1699989",
        "interestingVotes": {
            "down": 26,
            "up": 1444
        },
        "lines": [
            {
                "stageDirection": "repeated line"
            },
            {
                "characters": [
                    {
                        "character": "Eddard Stark",
                        "characterId": "/character/ch0154681/",
                        "nameId": "/name/nm0000293/"
                    }
                ],
                "text": "Winter is coming."
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt3071482",
        "interestingVotes": {
            "down": 3,
            "up": 320
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Jon Snow",
                        "characterId": "/character/ch0155777/",
                        "nameId": "/name/nm3229685/"
                    }
                ],
                "text": "I heard it was best to keep your enemies close."
            },
            {
                "characters": [
                    {
                        "character": "Stannis Baratheon",
                        "characterId": "/character/ch0250897/",
                        "nameId": "/name/nm0226820/"
                    }
                ],
                "text": "Whoever said that didn't have many enemies."
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt3071470",
        "interestingVotes": {
            "down": 3,
            "up": 305
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Lord Varys",
                        "characterId": "/character/ch0249636/",
                        "nameId": "/name/nm0384152/"
                    }
                ],
                "text": "Any fool with a bit of luck can find himself born into power. But earning it for yourself, that takes work."
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt1553146",
        "interestingVotes": {
            "down": 21,
            "up": 985
        },
        "lines": [
            {
                "stageDirection": "repeated line"
            },
            {
                "characters": [
                    {
                        "character": "Tyrion Lannister",
                        "characterId": "/character/ch0146096/",
                        "nameId": "/name/nm0227759/"
                    }
                ],
                "text": "A Lannister always pays his debts."
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt3580232",
        "interestingVotes": {
            "down": 3,
            "up": 238
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Tyrion Lannister",
                        "characterId": "/character/ch0146096/",
                        "nameId": "/name/nm0227759/"
                    }
                ],
                "text": "Let me give you some advice, bastard. Never forget what you are, the rest of the world will not. Wear it like armor and it can never be used to hurt you."
            },
            {
                "characters": [
                    {
                        "character": "Jon Snow",
                        "characterId": "/character/ch0155777/",
                        "nameId": "/name/nm3229685/"
                    }
                ],
                "text": "What the hell do you know about being a bastard?"
            },
            {
                "characters": [
                    {
                        "character": "Tyrion Lannister",
                        "characterId": "/character/ch0146096/",
                        "nameId": "/name/nm0227759/"
                    }
                ],
                "text": "All dwarfs are bastards in their father's eyes."
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt3071553",
        "interestingVotes": {
            "down": 6,
            "up": 335
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Petyr 'Littlefinger' Baelish",
                        "characterId": "/character/ch0245982/",
                        "nameId": "/name/nm0318821/"
                    }
                ],
                "text": "The realm. Do you know what the realm is? It's the thousand blades of Aegon's enemies. A story we agree to tell each other over and over until we forget that it's a lie."
            },
            {
                "characters": [
                    {
                        "character": "Lord Varys",
                        "characterId": "/character/ch0249636/",
                        "nameId": "/name/nm0384152/"
                    }
                ],
                "text": "But what do we have left once we abandon the lie? Chaos? A gaping pit waiting to swallow us all."
            },
            {
                "characters": [
                    {
                        "character": "Petyr 'Littlefinger' Baelish",
                        "characterId": "/character/ch0245982/",
                        "nameId": "/name/nm0318821/"
                    }
                ],
                "text": "Chaos isn't a pit. Chaos is a ladder. Many who try to climb it fail and never get to try again. The fall breaks them. And some are given a chance to climb; they refuse. They cling to the realm or the gods or love. Illusions. Only the ladder is real. The climb is all there is."
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt3611479",
        "interestingVotes": {
            "down": 2,
            "up": 186
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Tyrion Lannister",
                        "characterId": "/character/ch0146096/",
                        "nameId": "/name/nm0227759/"
                    }
                ],
                "stageDirection": "to Cersei",
                "text": "A day will come when you think you are safe and happy, and your joy will turn to ashes in your mouth. And you will know the debt is paid."
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt1916227",
        "interestingVotes": {
            "down": 51,
            "up": 1400
        },
        "lines": [
            {
                "stageDirection": "repeated line"
            },
            {
                "characters": [
                    {
                        "character": "Ygritte",
                        "characterId": "/character/ch0304492/",
                        "nameId": "/name/nm3310211/"
                    }
                ],
                "text": "You know nothing, Jon Snow."
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt3605351",
        "interestingVotes": {
            "down": 1,
            "up": 116
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Mance Rayder",
                        "characterId": "/character/ch0335039/",
                        "nameId": "/name/nm0001354/"
                    }
                ],
                "text": "The freedom to make my own mistakes was all I ever wanted."
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt2632620",
        "interestingVotes": {
            "down": 31,
            "up": 895
        },
        "lines": [
            {
                "stageDirection": "repeated line"
            },
            {
                "characters": [
                    {
                        "character": "Hodor",
                        "characterId": "/character/ch0238584/",
                        "nameId": "/name/nm3964231/"
                    }
                ],
                "text": "Hodor!"
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt3089579",
        "interestingVotes": {
            "down": 6,
            "up": 262
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Tyrion Lannister",
                        "characterId": "/character/ch0146096/",
                        "nameId": "/name/nm0227759/"
                    }
                ],
                "stageDirection": "to Joffrey",
                "text": "We've had vicious kings and we've had idiot kings, but I don't know if we've ever been cursed with a vicious idiot for a king!"
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt3611486",
        "interestingVotes": {
            "down": 3,
            "up": 159
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Sandor 'The Hound' Clegane",
                        "characterId": "/character/ch0162882/",
                        "nameId": "/name/nm0564920/"
                    }
                ],
                "text": "Any man dies with a clean sword, I'll rape his fucking corpse!"
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt3071548",
        "interestingVotes": {
            "down": 2,
            "up": 128
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Stannis Baratheon",
                        "characterId": "/character/ch0250897/",
                        "nameId": "/name/nm0226820/"
                    }
                ],
                "text": "We march to victory, or we march to defeat. But we go forward. Only forward."
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt3071469",
        "interestingVotes": {
            "down": 2,
            "up": 117
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Robb Stark",
                        "characterId": "/character/ch0158596/",
                        "nameId": "/name/nm0534635/"
                    }
                ],
                "text": "All men should keep their word, kings most of all."
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt3069598",
        "interestingVotes": {
            "down": 2,
            "up": 114
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Brienne of Tarth",
                        "characterId": "/character/ch0254503/",
                        "nameId": "/name/nm3729225/"
                    }
                ],
                "text": "Nothing's more hateful than failing to protect the one you love."
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt1989667",
        "interestingVotes": {
            "down": 36,
            "up": 755
        },
        "lines": [
            {
                "stageDirection": "repeated line"
            },
            {
                "characters": [
                    {
                        "character": "Melisandre",
                        "characterId": "/character/ch0287523/",
                        "nameId": "/name/nm0396924/"
                    }
                ],
                "text": "The night is dark and full of terrors."
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt4530884",
        "interestingVotes": {
            "up": 55
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Tyrion Lannister",
                        "characterId": "/character/ch0146096/",
                        "nameId": "/name/nm0227759/"
                    }
                ],
                "stageDirection": "to Janos Slynt",
                "text": "I'm not questioning your honor; I'm denying its existence."
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt2019310",
        "interestingVotes": {
            "down": 30,
            "up": 534
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Robert Baratheon",
                        "characterId": "/character/ch0155776/",
                        "nameId": "/name/nm0004692/"
                    }
                ],
                "text": "I'm simply asking you to run my kingdom while I eat, drink, and whore myself into an early grave."
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt3619114",
        "interestingVotes": {
            "down": 1,
            "up": 68
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Thoros of Myr",
                        "characterId": "/character/ch0316927/",
                        "nameId": "/name/nm0443373/"
                    }
                ],
                "text": "For a big hard man, you scare easy."
            },
            {
                "characters": [
                    {
                        "character": "Sandor 'The Hound' Clegane",
                        "characterId": "/character/ch0162882/",
                        "nameId": "/name/nm0564920/"
                    }
                ],
                "text": "I'll tell you what doesn't scare me. Bald cocksuckers like you! You think you're fooling anyone with that topknot? Bald cunt."
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt3079236",
        "interestingVotes": {
            "down": 8,
            "up": 187
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Oberyn Martell",
                        "characterId": "/character/ch0392307/",
                        "nameId": "/name/nm0050959/"
                    }
                ],
                "text": "When we met your sister, she promised she would show you to us. Every day we would ask. Every day she would say, \"Soon.\" Then she and your brother took us to your nursery and... she unveiled the freak. Your head was a bit large. Your arms and legs were a bit small, but no claw. No red eye. No tail between your legs. Just a tiny pink cock. We didn't try to hide our disappointment. \"That's not a monster,\" I told Cersei, \"that's just a baby.\" And she said, \"He killed my mother.\" And she pinched your little cock so hard, I thought she might pull it off. Until your brother made her stop. \"It doesn't matter,\" she told us. \"Everyone says he will die soon, I hope they are right; he should not have lived this long.\""
            },
            {
                "characters": [
                    {
                        "character": "Tyrion Lannister",
                        "characterId": "/character/ch0146096/",
                        "nameId": "/name/nm0227759/"
                    }
                ],
                "stageDirection": "tears welling",
                "text": "Well... sooner or later, Cersei always gets what she wants."
            },
            {
                "characters": [
                    {
                        "character": "Oberyn Martell",
                        "characterId": "/character/ch0392307/",
                        "nameId": "/name/nm0050959/"
                    }
                ],
                "text": "And what about what I want? Justice for my sister and her children."
            },
            {
                "characters": [
                    {
                        "character": "Tyrion Lannister",
                        "characterId": "/character/ch0146096/",
                        "nameId": "/name/nm0227759/"
                    }
                ],
                "text": "If you want justice, you've come to the wrong place."
            },
            {
                "characters": [
                    {
                        "character": "Oberyn Martell",
                        "characterId": "/character/ch0392307/",
                        "nameId": "/name/nm0050959/"
                    }
                ],
                "text": "I disagree. I've come to the perfect place. I want to bring those who have wronged me to justice, and all those who have wronged me are right here. I will begin with Ser Gregor Clegane, who killed my sister's children and then raped her with their blood still on his hands before killing her, too. I will be your champion."
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt3611491",
        "interestingVotes": {
            "down": 2,
            "up": 86
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Joffrey Baratheon",
                        "characterId": "/character/ch0156278/",
                        "nameId": "/name/nm0322416/"
                    }
                ],
                "text": "If I tell the Hound to cut you in half, he'll do it without a second thought."
            },
            {
                "characters": [
                    {
                        "character": "Tyrion Lannister",
                        "characterId": "/character/ch0146096/",
                        "nameId": "/name/nm0227759/"
                    }
                ],
                "text": "That would make me the quarter-man. Just doesn't have the same ring to it."
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt3611484",
        "interestingVotes": {
            "down": 2,
            "up": 85
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Joffrey Baratheon",
                        "characterId": "/character/ch0156278/",
                        "nameId": "/name/nm0322416/"
                    }
                ],
                "text": "They say Stannis never smiles. I'll give him a red smile, from ear to ear."
            },
            {
                "stageDirection": "Joffrey walks away"
            },
            {
                "characters": [
                    {
                        "character": "Tyrion Lannister",
                        "characterId": "/character/ch0146096/",
                        "nameId": "/name/nm0227759/"
                    }
                ],
                "stageDirection": "jokingly",
                "text": "Imagine Stannis' terror."
            },
            {
                "characters": [
                    {
                        "character": "Lord Varys",
                        "characterId": "/character/ch0249636/",
                        "nameId": "/name/nm0384152/"
                    }
                ],
                "text": "I am trying."
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt3575159",
        "interestingVotes": {
            "down": 1,
            "up": 63
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Eddard Stark",
                        "characterId": "/character/ch0154681/",
                        "nameId": "/name/nm0000293/"
                    }
                ],
                "text": "You think my life is some precious thing to me? That I would trade my honor for a few more years... of what? You grew up with actors. You learned their craft and you learnt it well. But I grew up with soldiers. I learned to die a long time ago."
            },
            {
                "characters": [
                    {
                        "character": "Lord Varys",
                        "characterId": "/character/ch0249636/",
                        "nameId": "/name/nm0384152/"
                    }
                ],
                "text": "Pity. Such a pity. What of your daughter's life, my lord? Is that a precious thing to you?"
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt2912297",
        "interestingVotes": {
            "down": 12,
            "up": 207
        },
        "lines": [
            {
                "stageDirection": "repeated line"
            },
            {
                "characters": [
                    {
                        "character": "Samwell Tarly",
                        "characterId": "/character/ch0244961/",
                        "nameId": "/name/nm4263213/"
                    }
                ],
                "text": "I read it in a book."
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt2911402",
        "interestingVotes": {
            "down": 12,
            "up": 199
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Ramsay Snow",
                        "characterId": "/character/ch0321004/",
                        "nameId": "/name/nm3701064/"
                    }
                ],
                "text": "To the traitor and bastard Jon Snow. You allowed thousands of wildlings past the Wall. You have betrayed your own kind. You have betrayed the North. Winterfell is mine, bastard. Come and see. Your brother Rickon is in my dungeon. His direwolf's skin is on my floor. Come and see. I want my bride back. Send her to me, bastard, and I will not trouble you or your wildling lovers. Keep her from me and I will ride north and slaughter every wildling man, woman, and babe living under your protection. You will watch as I skin them living. You will watch as my soldiers take turns raping your sister. You will watch as my dogs devour your wild little brother. Then I will spoon your eyes from their sockets and let my dogs do the rest. Come and see. -Ramsay Bolton, Lord of Winterfell and Warden of the North"
            }
        ],
        "spoiler": true
    },
    {
        "id": "/title/tt0944947/quotes/qt2731959",
        "interestingVotes": {
            "down": 16,
            "up": 198
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Jaime Lannister",
                        "characterId": "/character/ch0158527/",
                        "nameId": "/name/nm0182666/"
                    }
                ],
                "stageDirection": "about Ned Stark",
                "text": "By what right does the wolf judge the lion? By what right?"
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt3417382",
        "interestingVotes": {
            "down": 5,
            "up": 78
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Jaime Lannister",
                        "characterId": "/character/ch0158527/",
                        "nameId": "/name/nm0182666/"
                    }
                ],
                "stageDirection": "to Brienne, about Aerys Targaryen",
                "text": "Tell me, if your precious Renly commanded you to kill your own father and stand by while thousands of men, women and children burnt alive, would you have done it? Would you have kept your oath then?"
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt3602921",
        "interestingVotes": {
            "down": 2,
            "up": 48
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Maester Aemon",
                        "characterId": "/character/ch0246936/",
                        "nameId": "/name/nm0891092/"
                    }
                ],
                "text": "Nothing makes the past a sweeter place to visit than the prospect of imminent death."
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt3580219",
        "interestingVotes": {
            "down": 5,
            "up": 76
        },
        "lines": [
            {
                "stageDirection": "Robert strikes Cersei across the face"
            },
            {
                "characters": [
                    {
                        "character": "Cersei Lannister",
                        "characterId": "/character/ch0159526/",
                        "nameId": "/name/nm0372176/"
                    }
                ],
                "text": "I shall wear this as a badge of honor."
            },
            {
                "characters": [
                    {
                        "character": "Robert Baratheon",
                        "characterId": "/character/ch0155776/",
                        "nameId": "/name/nm0004692/"
                    }
                ],
                "text": "Wear it in silence or I'll honor you again."
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt3582988",
        "interestingVotes": {
            "down": 5,
            "up": 36
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Ramsay Snow",
                        "characterId": "/character/ch0321004/",
                        "nameId": "/name/nm3701064/"
                    }
                ],
                "text": "My mother taught me not to throw stones at cripples... but my father taught me: aim for their head!"
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt6012035",
        "interestingVotes": {
            "up": 11
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Sandor 'The Hound' Clegane",
                        "characterId": "/character/ch0162882/",
                        "nameId": "/name/nm0564920/"
                    }
                ],
                "text": "Fuck the kingsguard. Fuck the city. Fuck the king."
            }
        ],
        "spoiler": false
    },
    {
        "id": "/title/tt0944947/quotes/qt4558243",
        "interestingVotes": {
            "down": 4,
            "up": 17
        },
        "lines": [
            {
                "characters": [
                    {
                        "character": "Robert Baratheon",
                        "characterId": "/character/ch0155776/",
                        "nameId": "/name/nm0004692/"
                    }
                ],
                "text": "The whore is pregnant!"
            }
        ],
        "spoiler": false
    }
]
}
const QUOTE4 = {
        "id": "/title/tt0073195/",
        "base": {
            "@type": "imdb.api.title.base",
            "id": "/title/tt0073195/",
            "image": {
                "height": 1535,
                "id": "/title/tt0073195/images/rm1449540864",
                "url": "https://m.media-amazon.com/images/M/MV5BMmVmODY1MzEtYTMwZC00MzNhLWFkNDMtZjAwM2EwODUxZTA5XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
                "width": 1000
            },
            "title": "Jaws",
            "titleType": "movie",
            "year": 1975
        },
        "quotes": [
            {
                "id": "/title/tt0073195/quotes/qt0457091",
                "interestingVotes": {
                    "down": 8,
                    "up": 258
                },
                "lines": [
                    {
                        "stageDirection": "the three men are comparing their scars"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "What's that one?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "What?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "That one, there, on your arm."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Oh, uh, that's a tattoo, I got that removed."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Don't tell me, don't tell me...\"Mother.\""
                    },
                    {
                        "stageDirection": "he roars with laughter"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "What is it..."
                    },
                    {
                        "stageDirection": "Quint solemnly clamps a hand on Hooper's arm"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Mr. Hooper, that's the USS Indianapolis."
                    },
                    {
                        "stageDirection": "Hooper immediately stops laughing"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "You were on the Indianapolis?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "What happened?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Japanese submarine slammed two torpedoes into our side, Chief. We was comin' back from the island of Tinian to Leyte, just delivered the bomb. The Hiroshima bomb. Eleven hundred men went into the water. Vessel went down in twelve minutes. Didn't see the first shark for about a half an hour. Tiger. Thirteen-footer. You know how you know that when you're in the water, Chief? You tell by lookin' from the dorsal to the tail. What we didn't know... was our bomb mission had been so secret, no distress signal had been sent. Heh."
                    },
                    {
                        "stageDirection": "he pauses and takes a drink"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "They didn't even list us overdue for a week. Very first light, Chief, sharks come cruisin'. So we formed ourselves into tight groups. Y'know, it's... kinda like ol' squares in a battle like, uh, you see in a calendar, like the Battle of Waterloo, and the idea was, shark comes to the nearest man and that man, he'd start poundin' and hollerin' and screamin', and sometimes the shark'd go away... sometimes he wouldn't go away. Sometimes that shark, he looks right into ya. Right into your eyes. Y'know the thing about a shark, he's got... lifeless eyes, black eyes, like a doll's eyes. When he comes at ya, doesn't seem to be livin'... until he bites ya. And those black eyes roll over white, and then... oh, then you hear that terrible high-pitch screamin', the ocean turns red, and spite of all the poundin' and the hollerin', they all come in and they... rip you to pieces."
                    },
                    {
                        "stageDirection": "he pauses"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Y'know, by the end of that first dawn... lost a hundred men. I dunno how many sharks. Maybe a thousand. I dunno how many men, they averaged six an hour. On Thursday mornin', Chief, I bumped into a friend of mine, Herbie Robinson from Cleveland- baseball player, boatswain's mate. I thought he was asleep, reached over to wake him up... bobbed up and down in the water just like a kinda top. Upended. Well... he'd been bitten in half below the waist. Noon the fifth day, Mr. Hooper, a Lockheed Ventura saw us, he swung in low and he saw us. Young pilot, a lot younger than Mr. Hooper. Anyway, he saw us and come in low and three hours later, a big fat PBY comes down and start to pick us up. Y'know, that was the time I was most frightened, waitin' for my turn. I'll never put on a life jacket again. So, eleven hundred men went into the water, three hundred sixteen men come out, and the sharks took the rest, June the 29th, 1945."
                    },
                    {
                        "stageDirection": "he pauses, smiles, and raises his glass"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Anyway... we delivered the bomb."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457120",
                "interestingVotes": {
                    "down": 4,
                    "up": 128
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Smile, you son of a BITCH!"
                    },
                    {
                        "stageDirection": "shoots at the air tank; the shark explodes"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457126",
                "interestingVotes": {
                    "down": 2,
                    "up": 90
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "That's some bad hat, Harry."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457119",
                "interestingVotes": {
                    "up": 35
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "\"Slow ahead.\" I can go slow ahead. Come on down here and chum some of this shit."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457124",
                "interestingVotes": {
                    "down": 2,
                    "up": 63
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "text": "Martin hates boats. Martin hates water. Martin... Martin sits in his car when we go on the ferry to the mainland. I guess it's a childhood thing. It's a... there's a clinical name for it isn't there?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Drowning."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457087",
                "interestingVotes": {
                    "down": 2,
                    "up": 60
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "Quint first scratches the chalk board to get everyone's attention",
                        "text": "Y'all know me. Know how I earn a livin'. I'll catch this bird for you, but it ain't gonna be easy. Bad fish. Not like going down the pond chasin' bluegills and tommycods. This shark, swallow you whole. Little shakin', little tenderizin', an' down you go. And we gotta do it quick, that'll bring back your tourists, put all your businesses on a payin' basis. But it's not gonna be pleasant. I value my neck a lot more than three thousand bucks, chief. I'll find him for three, but I'll catch him, and kill him, for ten. But you've gotta make up your minds. If you want to stay alive, then ante up. If you want to play it cheap, be on welfare the whole winter. I don't want no volunteers, I don't want no mates, there's just too many captains on this island. $10,000 for me by myself. For that you get the head, the tail, the whole damn thing."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt3009593",
                "interestingVotes": {
                    "up": 31
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "to Quint after getting his first good look at the great white shark up close while chumming",
                        "text": "You're gonna need a bigger boat."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457101",
                "interestingVotes": {
                    "down": 3,
                    "up": 70
                },
                "lines": [
                    {
                        "stageDirection": "last lines"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "What day is this?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "It's Wednesday... eh, it's Tuesday, I think."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Think the tide's with us?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Keep kicking."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "I used to hate the water..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "I can't imagine why."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457117",
                "interestingVotes": {
                    "down": 5,
                    "up": 90
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Here lies the body of Mary Lee; died at the age of a hundred and three. For fifteen years she kept her virginity; not a bad record for this vicinity."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457122",
                "interestingVotes": {
                    "down": 3,
                    "up": 67
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "seeing Hooper's equipment",
                        "text": "What are you? Some kind of half-assed astronaut?"
                    },
                    {
                        "stageDirection": "examining the shark cage"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Jesus H Christ, when I was a boy, every little squirt wanted to be a harpooner or a sword fisherman. What d'ya have there - a portable shower or a monkey cage?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Anti-Shark cage."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Anti-shark cage. You go inside the cage?"
                    },
                    {
                        "stageDirection": "Hooper nods"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Cage goes in the water, you go in the water. Shark's in the water. Our shark."
                    },
                    {
                        "stageDirection": "sings"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Farewell and adieu to you, fair Spanish ladies. Farewell and adieu, you ladies of Spain. For we've received orders for to sail back to Boston. And so nevermore shall we see you again."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457153",
                "interestingVotes": {
                    "up": 28
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Mrs. Kintner",
                                "characterId": "/character/ch0002882/",
                                "nameId": "/name/nm0276444/"
                            }
                        ],
                        "text": "Chief Brody?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Yes?"
                    },
                    {
                        "stageDirection": "Mrs. Kintner slaps Brody and sobs"
                    },
                    {
                        "characters": [
                            {
                                "character": "Mrs. Kintner",
                                "characterId": "/character/ch0002882/",
                                "nameId": "/name/nm0276444/"
                            }
                        ],
                        "text": "I just found out, that a girl got killed here last week, and you knew it! You knew there was a shark out there! You knew it was dangerous! But you let people go swimming anyway? You knew all those things! But still my boy is dead now. And there's nothing you can do about it. My boy is dead. I wanted you to know that."
                    },
                    {
                        "stageDirection": "Mrs. Kintner walks away"
                    },
                    {
                        "characters": [
                            {
                                "character": "Mayor Vaughn",
                                "characterId": "/character/ch0002874/",
                                "nameId": "/name/nm0358069/"
                            }
                        ],
                        "text": "I'm sorry, Martin. She's wrong."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "No, she's not."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0549071",
                "interestingVotes": {
                    "up": 28
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "singing",
                        "text": "Farewell and adieu to you fair Spanish ladies. Farewell and adieu to you ladies of Spain. For we've received orders for to sail back to Boston. And so never more shall we see you again."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457086",
                "interestingVotes": {
                    "up": 26
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "I'm not going to waste my time arguing with a man who's lining up to be a hot lunch."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457116",
                "interestingVotes": {
                    "down": 2,
                    "up": 50
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Here's to swimmin' with bow-legged women."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457089",
                "interestingVotes": {
                    "up": 21
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Mayor Vaughn",
                                "characterId": "/character/ch0002874/",
                                "nameId": "/name/nm0358069/"
                            }
                        ],
                        "text": "Fellows, let's be reasonable, huh? This is not the time or the place to perform some kind of a half-assed autopsy on a fish... And I'm not going to stand here and see that thing cut open and see that little Kintner boy spill out all over the dock."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457110",
                "interestingVotes": {
                    "up": 21
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "This was no boat accident."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457095",
                "interestingVotes": {
                    "up": 19
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Is it true that most people get attacked by sharks in three feet of water about ten feet from the beach?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Yeah."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "And that... and that before people started to swim for recreation - I mean before sharks knew what they were missing - that a lot of these attacks weren't reported?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "That's right."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Now this shark that... that... that swims alone..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Rogue."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "What's it called?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            },
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "together",
                        "text": "Rogue."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Rogue, yeah. Now this guy, he... he keeps swimmin' around in a place where the feeding is good until the food supply is gone, right?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "It's called \"territoriality\". It's just a theory that I happen to... agree with."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Then why don't we have one more drink and go down and cut that shark open?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "text": "Martin? Can you do that?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "I can do anything; I'm the chief of police."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457108",
                "interestingVotes": {
                    "up": 19
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Ha, ha - they're all gonna die."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457147",
                "interestingVotes": {
                    "up": 19
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "singing",
                        "text": "Show me the way to go home / I'm tired and I want to go to bed..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            },
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            },
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "all singing together",
                        "text": "I had a little drink about an hour ago and it got right to my head / Wherever I may roam / by land or sea or foam..."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457113",
                "interestingVotes": {
                    "down": 1,
                    "up": 28
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "It doesn't make any sense when you pay a guy like you to watch sharks."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Well, uh, it doesn't make much sense for a guy who hates the water to live on an island either."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "It's only an island if you look at it from the water."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "That makes a lot of sense."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457157",
                "interestingVotes": {
                    "up": 17
                },
                "lines": [
                    {
                        "stageDirection": "Brody sees his son sitting in a small skiff, and yells for him to get out of it"
                    },
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "text": "Martin, it's his birthday tomorrow!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "I don't want him on the ocean!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "text": "He's not on the ocean, he is in a boat! He's not gonna go in the water! I don't think he'll ever go in the water again after what happened yesterday."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "All right, now don't say that. I don't want that to happen, you know that. But I want him to read the boating regulations, the rules, y'know, before he goes out on his own."
                    },
                    {
                        "stageDirection": "while he talks, Ellen flips through the book on sharks he has been reading, and sees an old painting of a shark ramming a hole into the bottom of rowboat's hull"
                    },
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "stageDirection": "slams the book shut",
                        "text": "Michael! Did you hear your father? Out of the water now! NOW!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457118",
                "interestingVotes": {
                    "up": 16
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Back home we got a taxidermy man. He gonna have a heart attack when he see what I brung him."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457109",
                "interestingVotes": {
                    "down": 1,
                    "up": 24
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "That's a twenty footer."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Twenty-five. Three tons of him."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457142",
                "interestingVotes": {
                    "up": 15
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Boys, oh boys... I think he's come back for his noon feeding."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457148",
                "interestingVotes": {
                    "up": 15
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "trying to get the fishing line secure",
                        "text": "It may be a marlin or a stingray... but it's definitely a game fish."
                    },
                    {
                        "stageDirection": "Hooper pulls as the lines snaps and he crashes his head into the wall"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "picking up the line",
                        "text": "Gamin' fish, eh? Marlin? Stingray? Bit through this piano wire? Don't you tell me my business again! You get back on the bridge..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Quint, that doesn't prove a damn thing!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Well it proves one thing, Mr. Hooper. It proves that you wealthy college boys don't have the education enough to admit when you're wrong."
                    },
                    {
                        "stageDirection": "Quint enters the cabin as Hooper makes faces at him"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "following Quint inside the boat",
                        "text": "What's the point? Hooks and lines..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "slams on the roof at Hooper",
                        "text": "Hooper! 12 minutes south south east now, full throttle!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "Mocking Pirate Voice",
                        "text": "Aye, aye, sir! AYE JIMBOY ARAGHHH!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "to Brody",
                        "text": "See what I do, Chief, is I trick 'em to the surface. And I jab at 'em. I'm not gonna haul 'em up like a lot of catfish."
                    },
                    {
                        "stageDirection": "slams on the roof"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Hooper, full throttle!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "voice imitating W. C. Fields",
                        "text": "I don't have to take this abuse much longer!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457090",
                "interestingVotes": {
                    "down": 2,
                    "up": 29
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Mayor Vaughn",
                                "characterId": "/character/ch0002874/",
                                "nameId": "/name/nm0358069/"
                            }
                        ],
                        "text": "Martin, it's all psychological. You yell barracuda, everybody says, \"Huh? What?\" You yell shark, we've got a panic on our hands on the Fourth of July."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457094",
                "interestingVotes": {
                    "down": 2,
                    "up": 29
                },
                "lines": [
                    {
                        "stageDirection": "Hooper is examining the remains of the first victim, describing the post-mortem into his tape recorder"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "The height and weight of the victim can only be estimated from the partial remains..."
                    },
                    {
                        "stageDirection": "He lifts the sheet covering the remains, inhales sharply, then regains his composure"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "The torso has been severed in mid-thorax; there are no major organs remaining... May I have a glass of water, please?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Medical Examiner",
                                "nameId": "/name/nm0627495/"
                            }
                        ],
                        "text": "Sure."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Right arm has been severed above the elbow with massive tissue loss in the upper musculature."
                    },
                    {
                        "stageDirection": "takes water"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Thank you very much."
                    },
                    {
                        "stageDirection": "sips the water and continues"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Partially denuded bone remaining..."
                    },
                    {
                        "stageDirection": "to the M.E"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "This was no boating accident."
                    },
                    {
                        "stageDirection": "to Brody"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Did you notify the Coast Guard about this?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "No. It was only local jurisdiction."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "continues post-mortem",
                        "text": "The left arm, head, shoulders, sternum and portions of the rib cage are intact..."
                    },
                    {
                        "stageDirection": "Brody begins to light a cigarette"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Do not smoke in here, thank you very much!"
                    },
                    {
                        "stageDirection": "lifts up the severed arm"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "This is what happens. It indicates the non-frenzied feeding of a large squalus - possibly Longimanus or Isurus glauca. Now the enormous amount of tissue loss prevents any detailed analysis; however the attacking squalus must be considerably larger than any normal squalus found in these waters."
                    },
                    {
                        "stageDirection": "pulls off his glasses"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Didn't you get on a boat and check out these waters?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "No."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Well, this is not a boat accident! It wasn't any propeller, it wasn't any coral reef, and it wasn't Jack the Ripper!"
                    },
                    {
                        "stageDirection": "splashes water on his face and takes a deep breath"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "It was a shark."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457141",
                "interestingVotes": {
                    "up": 13
                },
                "lines": [
                    {
                        "stageDirection": "about to go looking for the shark"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "On the water?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Well, if we're looking for a shark we're not gonna find him on the land."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457149",
                "interestingVotes": {
                    "up": 13
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Hooper, what exactly can you do with these things of yours?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Well, I think I can pump 20 cc's of strychnine nitrate into him, if I can get close enough."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Can you get this little needle through his skin?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "No, I can't do that. But if I can get him close enough to this cage, I think that I can get him in the mouth or the eye..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "That shark will rip that cage to pieces!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "shouting",
                        "text": "YOU GOT ANY BETTER SUGGESTIONS?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt1497268",
                "interestingVotes": {
                    "up": 13
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "text": "What am I going to tell the kids?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Tell them I'm going fishing."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457106",
                "interestingVotes": {
                    "up": 12
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "motioning to Brody to get closer to the barrels",
                        "text": "Come on Martin! Move, move, move!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "I'm not going out there!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Beyond the edge of the barrels, go to the end of the barrels! Further out!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "What?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Further out!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Why?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Go further out!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "What for?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Will you go to the end of the pulpit, please?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "What?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Will you just please go to the end of the pulpit!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "What for?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "I need to have something in the foreground to give it some scale."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Foreground, my ass!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457115",
                "interestingVotes": {
                    "down": 1,
                    "up": 18
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Mayor Vaughn",
                                "characterId": "/character/ch0002874/",
                                "nameId": "/name/nm0358069/"
                            }
                        ],
                        "text": "I don't think either of one you are familiar with our problems."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "I think that I am familiar with the fact that you are going to ignore this particular problem until it swims up and BITES YOU ON THE ASS!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457096",
                "interestingVotes": {
                    "up": 11
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Ben Gardner",
                                "characterId": "/character/ch0002883/",
                                "nameId": "/name/nm0455475/"
                            }
                        ],
                        "text": "When we get them silly bastards down in that rock pile, it'll be some fun, they'll wish their fathers had never met their mothers. When they start takin' their bottoms out and slamming into them rocks, boy! Get away from there, ya goddamn fool, you! What's the matter with you? You wanna swamp us, ya crazy son of a bitch?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457129",
                "interestingVotes": {
                    "up": 11
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Mayor Vaughn",
                                "characterId": "/character/ch0002874/",
                                "nameId": "/name/nm0358069/"
                            }
                        ],
                        "text": "Any special questions?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Denherder",
                                "characterId": "/character/ch0002890/",
                                "nameId": "/name/nm0150019/"
                            }
                        ],
                        "text": "Uh, is that $3000 bounty on the shark in cash or check?"
                    },
                    {
                        "stageDirection": "the townspeople laugh"
                    },
                    {
                        "characters": [
                            {
                                "character": "Mrs. Taft",
                                "characterId": "/character/ch0002886/",
                                "nameId": "/name/nm0183914/"
                            }
                        ],
                        "text": "I don't think that's funny. I don't think that's funny at all, I'm sorry."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457139",
                "interestingVotes": {
                    "up": 11
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Yeah, but I'm not drunk enough to go out on a boat."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Yes, you are."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "No, I'm not."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Yes, you are."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "I can't do that."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Yes, you can."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457156",
                "interestingVotes": {
                    "down": 1,
                    "up": 16
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Mr. Vaughn, what we are dealing with here is a perfect engine, an eating machine. It's really a miracle of evolution. All this machine does is swim and eat and make little sharks, and that's all. Now, why don't you take a long, close look at this sign."
                    },
                    {
                        "stageDirection": "refers to the graffitied billboard"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Those proportions are correct."
                    },
                    {
                        "characters": [
                            {
                                "character": "Mayor Vaughn",
                                "characterId": "/character/ch0002874/",
                                "nameId": "/name/nm0358069/"
                            }
                        ],
                        "text": "Love to prove that, wouldn't ya? Get your name into the National Geographic."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457121",
                "interestingVotes": {
                    "up": 10
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Mayor Vaughn",
                                "characterId": "/character/ch0002874/",
                                "nameId": "/name/nm0358069/"
                            }
                        ],
                        "stageDirection": "to reporter",
                        "text": "I'm pleased and happy to repeat the news that we have, in fact, caught and killed a large predator that supposedly injured some bathers. But, as you see, it's a beautiful day, the beaches are open and people are having a wonderful time. Amity, as you know, means \"friendship\"."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457123",
                "interestingVotes": {
                    "up": 10
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Front, bow. Back, stern. If ya don't get it right, squirt, I throw your ass out the little round window on the side."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457133",
                "interestingVotes": {
                    "up": 10
                },
                "lines": [
                    {
                        "stageDirection": "as Brody sends the air tanks flying"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Dammit, Martin! This is compressed air!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Well, what the hell kind of a knot was that?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "You pulled the wrong one. You screw around with these tanks, and they're gonna blow up!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Yeah, that's real fine expensive gear you brought out here, Mr. Hooper. 'Course I don't know what that bastard shark's gonna do with it, might eat it I suppose. Seen one eat a rockin' chair one time. Hey chieffy, next time you just ask me which line to pull, right?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457137",
                "interestingVotes": {
                    "up": 10
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "On radio",
                        "text": "Your husband's all right, Mrs. Brody. He's fishing. He's just caught a couple of stripers. We'll bring 'em in for dinner. We won't be long, we haven't seen anything yet. Over and out."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457146",
                "interestingVotes": {
                    "down": 1,
                    "up": 15
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "points to a scar on chest",
                        "text": "Mary Ellen Moffat. She broke my heart."
                    },
                    {
                        "stageDirection": "Hooper, Brody and Quint all laugh"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457145",
                "interestingVotes": {
                    "down": 1,
                    "up": 14
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "You wanna drink? Drink to your leg."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "I'll drink to your leg."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Okay, so we drink to our legs!"
                    },
                    {
                        "stageDirection": "both laugh"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457099",
                "interestingVotes": {
                    "up": 9
                },
                "lines": [
                    {
                        "stageDirection": "first lines"
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Cassidy",
                                "characterId": "/character/ch0175511/",
                                "nameId": "/name/nm0277204/"
                            }
                        ],
                        "text": "What's your name again?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Christine 'Chrissie' Watkins",
                                "characterId": "/character/ch0002879/",
                                "nameId": "/name/nm0045681/"
                            }
                        ],
                        "text": "Chrissie."
                    },
                    {
                        "characters": [
                            {
                                "character": "Tom Cassidy",
                                "characterId": "/character/ch0175511/",
                                "nameId": "/name/nm0277204/"
                            }
                        ],
                        "text": "Where are we going?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Christine 'Chrissie' Watkins",
                                "characterId": "/character/ch0002879/",
                                "nameId": "/name/nm0045681/"
                            }
                        ],
                        "text": "Swimming!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457111",
                "interestingVotes": {
                    "up": 9
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "You have city hands, Mr. Hooper. You been countin' money all your life."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "All right, all right! Hey, I don't need this... I don't need this working-class-hero crap!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457140",
                "interestingVotes": {
                    "down": 1,
                    "up": 13
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "text": "Wanna get drunk and fool around?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Oh Yeah."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457104",
                "interestingVotes": {
                    "up": 8
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "trying to hurry Brody into the boat",
                        "text": "Come on Chief, this isn't no boy scout picnic. See ya' got ya' rubbers!"
                    },
                    {
                        "stageDirection": "Quint laughs wildly"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457105",
                "interestingVotes": {
                    "up": 8
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "talking Brody through making knots",
                        "text": "Little brown eel comes out of the cave... Swims into the hole... Comes out of the hole... Goes back into the cave again... It's not too good is it Chief?"
                    },
                    {
                        "stageDirection": "Refering to Brody's messed up knot"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457155",
                "interestingVotes": {
                    "up": 8
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "to Mayor Vaughn, after the shark attack on July Fourth",
                        "text": "Larry, the summer is over. You're the mayor of \"shark city\". These people think you want the beaches open."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457143",
                "interestingVotes": {
                    "down": 1,
                    "up": 12
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "as he spots Hooper sitting on the deck playing solitaire",
                        "text": "Stop playin' with yourself, Hooper."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457102",
                "interestingVotes": {
                    "up": 7
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Mayor Vaughn",
                                "characterId": "/character/ch0002874/",
                                "nameId": "/name/nm0358069/"
                            }
                        ],
                        "text": "And what did you say the name of this shark is?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "It's a carcaradon carcharias. It's a Great White"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457130",
                "interestingVotes": {
                    "up": 7
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Ah. Just like I thought... He came up with the Gulf Stream - from southern waters."
                    },
                    {
                        "stageDirection": "he pulls a Louisiana license plate from the shark. Brody examines it"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "He didn't eat a car, did he?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Naw, a tiger shark's like a garbage can, it'll eat anything. Someone probably threw that in a river."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457132",
                "interestingVotes": {
                    "up": 7
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "Poking fun at Brody",
                        "text": "Ah, the missus, Chief. If they don't like you going out, they'll love you comin' in."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457135",
                "interestingVotes": {
                    "up": 7
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Mayor Vaughn",
                                "characterId": "/character/ch0002874/",
                                "nameId": "/name/nm0358069/"
                            }
                        ],
                        "text": "I'm only trying to say that Amity is a summer town. We need summer dollars. Now, if the people can't swim here, they'll be glad to swim at the beaches of Cape Cod, the Hamptons, Long Island..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "That doesn't mean we have to serve them up as smörgåsbord!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457154",
                "interestingVotes": {
                    "up": 7
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "I'm not talkin' 'bout pleasure boatin' or day sailin'. I'm talkin' 'bout workin' for a livin'. I'm talkin' 'bout sharkin'!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt1012949",
                "interestingVotes": {
                    "up": 7
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "text": "I just want to know one thing - when do I get to become an islander?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Mrs. Taft",
                                "characterId": "/character/ch0002886/",
                                "nameId": "/name/nm0183914/"
                            }
                        ],
                        "text": "Ellen, never, never! You're not born here, you're not an islander, that's it."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt2811354",
                "interestingVotes": {
                    "up": 7
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "on board the Orca",
                        "text": "Goddamn women today, they can't handle nothin'. Young girls just ain't quite smart... like their grandmothers were!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "stageDirection": "on the dock",
                        "text": "Gotta be Quint."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Colorful, isn't he?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457150",
                "interestingVotes": {
                    "down": 1,
                    "up": 10
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "text": "You see the kids?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "looking out the window",
                        "text": "They must be in the back yard."
                    },
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "text": "In Amity, you say \"yahd\"."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "starting out of the bedroom, speaking with a bad New-England accent",
                        "text": "They're in the \"yahd\", not too \"fah\" from the \"cah\"."
                    },
                    {
                        "stageDirection": "looks back at Ellen"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "How's that?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "text": "Like you're from New York."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457136",
                "interestingVotes": {
                    "up": 6
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hendricks",
                                "characterId": "/character/ch0175509/",
                                "nameId": "/name/nm0469552/"
                            }
                        ],
                        "text": "So then Denherder and Charlie sat there trying to catch their breath - and to figure out how to tell Charlie's wife what happened to her freezer full of meat."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "That's not funny. That's not funny at all."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457144",
                "interestingVotes": {
                    "up": 6
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "referring to a cut on Brody's head",
                        "text": "Chief... don't you worry about it, Chief. It won't be permanent. Wanna see somethin' permanent, boom-boom-boom?"
                    },
                    {
                        "stageDirection": "Quint pulls out a false front tooth and laughs"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Hey, Hoop, you wanna feel somethin' permanent? You just put your hand underneath my cap... and you just feel that little lump. Knock an ole un, St. Paddy's day, Boston."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "I got that beat."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "to Brody",
                        "text": "I got that beat."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0560050",
                "interestingVotes": {
                    "up": 6
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "to Brody",
                        "text": "'Scuse me. You know those eight guys in the fantail launch out there? Well, none of 'em are gonna get out of the harbor alive."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457114",
                "interestingVotes": {
                    "down": 1,
                    "up": 9
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "stageDirection": "upon meeting Matt Hooper",
                        "text": "My husband tells me you're in sharks."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt3063262",
                "interestingVotes": {
                    "down": 1,
                    "up": 9
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Out of Towner",
                                "nameId": "/name/nm0025702/"
                            }
                        ],
                        "text": "Yeah, well, but what kind? What kind of shark?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "With a pencil in his mouth",
                        "text": "It's a tiger shark."
                    },
                    {
                        "stageDirection": "Three Out of Towners turn slowly to face Hooper"
                    },
                    {
                        "characters": [
                            {
                                "character": "Out of Towner",
                                "nameId": "/name/nm0025702/"
                            }
                        ],
                        "text": "A what?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt3521759",
                "interestingVotes": {
                    "down": 17,
                    "up": 41
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "In shark's mouth",
                        "text": "Aaaaaaaaaaaaaaaaaaaaaaaaaahhhh!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457088",
                "interestingVotes": {
                    "up": 5
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "This shark, swallow you whole."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457097",
                "interestingVotes": {
                    "up": 5
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Hello."
                    },
                    {
                        "characters": [
                            {
                                "character": "Ben Gardner",
                                "characterId": "/character/ch0002883/",
                                "nameId": "/name/nm0455475/"
                            }
                        ],
                        "text": "Hello back... young feller. How are ya? Say I hope you not going out with those nuts, are ya?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457158",
                "interestingVotes": {
                    "up": 5
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "I got the creme de la creme. Right here. Hold on. Yeah, you see that?"
                    },
                    {
                        "stageDirection": "takes off his t-shirt, showing a very hairy chest"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "You're wearing a sweater!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0943695",
                "interestingVotes": {
                    "up": 5
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "on telephone",
                        "text": "Doctor, there is no need for me to come to Brisbane, when I have a great white shark right here!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt1249194",
                "interestingVotes": {
                    "up": 5
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "I don't believe it! Two barrels, and he's going down again!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457093",
                "interestingVotes": {
                    "down": 1,
                    "up": 7
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "Hooper attempts to wet his mask before Quint and Brody lower him in the shark cage",
                        "text": "I got no spit."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457131",
                "interestingVotes": {
                    "up": 4
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "What are you doing out there? These are your people - go and talk to them."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hendricks",
                                "characterId": "/character/ch0175509/",
                                "nameId": "/name/nm0469552/"
                            }
                        ],
                        "text": "Those aren't my people. They're from all over the place. Did you see all the license plates out in the parking lot? Connecticut, Rhode Island, New Jersey... I'm all by myself out there."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt1374098",
                "interestingVotes": {
                    "up": 4
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Mr. Taft"
                            }
                        ],
                        "text": "Why do you insist on playing the heavy all of the time?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Mrs. Taft",
                                "characterId": "/character/ch0002886/",
                                "nameId": "/name/nm0183914/"
                            }
                        ],
                        "text": "Look, I have a point of view and I think it speaks for many of the people here. It's not only me because I have the motel - how do you feel?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Mr. Hassett"
                            }
                        ],
                        "text": "Oh, I hope they don't close the beaches!"
                    },
                    {
                        "stageDirection": "Mrs. Taft nods in agreement"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt4556621",
                "interestingVotes": {
                    "up": 4
                },
                "lines": [
                    {
                        "stageDirection": "With the shark now dead, Brody and Hooper laugh with relief that their ordeal is over. Hooper looks around, and his laughter trails off as he realizes Quint is missing"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Quint."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "solemnly",
                        "text": "No."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457100",
                "interestingVotes": {
                    "down": 2,
                    "up": 8
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "stageDirection": "to Chief Brody",
                        "text": "You told me the shark was caught. And I, I heard it on the news... I heard it on the Cape station."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "They caught A shark, not THE shark. Big difference. Not the shark that killed Chrissie Watkins... and probably not the shark that killed the little boy... which I wanted to prove today, by cutting the shark open..."
                    },
                    {
                        "stageDirection": "sees the Chief pouring the wine he brought"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "you know, you oughta let that breathe a little"
                    },
                    {
                        "stageDirection": "sees the massive glass the Chief has poured"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "- nothing, nothing!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457107",
                "interestingVotes": {
                    "down": 1,
                    "up": 6
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "He ate the light."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457125",
                "interestingVotes": {
                    "up": 3
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Fast fish."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457128",
                "interestingVotes": {
                    "up": 3
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Pratt",
                                "characterId": "/character/ch0002889/",
                                "nameId": "/name/nm1188078/"
                            }
                        ],
                        "stageDirection": "to Hooper",
                        "text": "Ya know, I'm gonna stuff your friggin' head in there, man, and find out if it's a man-eater, all right?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5910347",
                "interestingVotes": {
                    "up": 3
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "He's gonna go under."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "I tell you he can't with three barrels on him. Not with three, he can't!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457092",
                "interestingVotes": {
                    "down": 1,
                    "up": 5
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "the Orca, their boat, is clearly sinking with water all over the deck, Quint hands Brody a small hand pump",
                        "text": "Pump it out Chief!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457134",
                "interestingVotes": {
                    "down": 1,
                    "up": 5
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Take this stuff back to the office and get to work on those signs. \"Beaches Closed - No Swimming. By the Order of the Amity PD\". And let Polly do the printing."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hendricks",
                                "characterId": "/character/ch0175509/",
                                "nameId": "/name/nm0469552/"
                            }
                        ],
                        "text": "What's the matter with my printing?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Let Polly do the printing."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457138",
                "interestingVotes": {
                    "down": 1,
                    "up": 5
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "Drunk",
                        "text": "I'm tellin' ya, the crime rate in New York'll kill you. There's so many problems, you never feel like you're accomplishing anything. Violence, rip-offs, muggings... kids can't leave the house - you gotta walk them to school. But in Amity one man can make a difference. In twenty-five years, there's never been a shooting or a murder in this town."
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "Around a mouthful of food",
                        "text": "No kidding. Want a pretzel?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Where are we?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457152",
                "interestingVotes": {
                    "down": 1,
                    "up": 5
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "You're certifiable, Quint! You know that?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Yeah, yeah, yeah..."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt1374099",
                "interestingVotes": {
                    "down": 1,
                    "up": 5
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "I just- I just want to tell you what we're planning so far..."
                    },
                    {
                        "characters": [
                            {
                                "character": "Meadows",
                                "characterId": "/character/ch0175508/",
                                "nameId": "/name/nm0331956/"
                            }
                        ],
                        "text": "What about the beaches, Chief?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "We're going to put on the extra- the extra summer deputies as quickly as possible, and then we're going to try and use, uh, shark-spotters on the beach."
                    },
                    {
                        "characters": [
                            {
                                "character": "Mrs. Taft",
                                "characterId": "/character/ch0002886/",
                                "nameId": "/name/nm0183914/"
                            }
                        ],
                        "stageDirection": "cuts him off",
                        "text": "Are you going to close the beaches?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "after brief pause",
                        "text": "Yes, we are."
                    },
                    {
                        "stageDirection": "townspeople erupt into dismayed argument"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457127",
                "interestingVotes": {
                    "up": 2
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "shouting",
                        "text": "Hooper, ya idiot! Starboard, ain't you watchin' it?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt3063263",
                "interestingVotes": {
                    "up": 2
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "Amidst commotion",
                        "text": "We're also planning to bring in some experts from the oceanographic institute on the mainland."
                    },
                    {
                        "characters": [
                            {
                                "character": "Mayor Vaughn",
                                "characterId": "/character/ch0002874/",
                                "nameId": "/name/nm0358069/"
                            }
                        ],
                        "text": "For only 24 hours!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "I didn't agree to that!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Mayor Vaughn",
                                "characterId": "/character/ch0002874/",
                                "nameId": "/name/nm0358069/"
                            }
                        ],
                        "text": "Only 24 hours."
                    },
                    {
                        "characters": [
                            {
                                "character": "Extra Townswoman"
                            }
                        ],
                        "text": "24 hours is like three weeks!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5909998",
                "interestingVotes": {
                    "down": 1,
                    "up": 3
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Ten thousand dollars."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Two hundred dollars a day whether I catch him or not."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "You got it."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Get the Mayor off my back so I don't have any more of this zoning crap."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "You got that."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "One case of apricot brandy. You buy the lunch."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Two cases!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457151",
                "interestingVotes": {
                    "down": 4,
                    "up": 4
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Christine 'Chrissie' Watkins",
                                "characterId": "/character/ch0002879/",
                                "nameId": "/name/nm0045681/"
                            }
                        ],
                        "text": "GOD HELP ME, PLEEEAAAAASE!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457098",
                "interestingVotes": {
                    "down": 1,
                    "up": 2
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Christine 'Chrissie' Watkins",
                                "characterId": "/character/ch0002879/",
                                "nameId": "/name/nm0045681/"
                            }
                        ],
                        "text": "Come on into the water!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt0457103",
                "interestingVotes": {
                    "down": 1,
                    "up": 2
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "before leaving dock",
                        "text": "Break it up will ya', Chief! Daylight's wastin'."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt3390611",
                "interestingVotes": {
                    "down": 1,
                    "up": 2
                },
                "lines": [
                    {
                        "stageDirection": "Quint has just destroyed the boat radio with a baseball bat when Chief Brody is trying to call on the Coast Guard"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "handing the bat to Brody",
                        "text": "Excuse me, chief."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "shouts hysterically; slamming down the receiver and hitting the bat on the already destroyed radio",
                        "text": "Ah, that *GREAT*! THAT'S JUST *GREAT*! WHERE THE HELL ARE WE NOW, HUH? YOU'RE CERTIFIABLE, QUINT, YOU KNOW THAT? YOU'RE CERTIFIABLE!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "dismissively",
                        "text": "Yeah, yeah, yeah..."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt3394952",
                "interestingVotes": {
                    "down": 1,
                    "up": 2
                },
                "lines": [
                    {
                        "stageDirection": "the three shark hunters have found the shark and are preparing to tag and kill it; Brody and Hooper are climbing over the the bow while Quint is in the cabin, taking out his harpoon gun"
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonar Operator",
                                "nameId": "/name/nm5026359/"
                            }
                        ],
                        "stageDirection": "via Quint's radio",
                        "text": "Amity Point Light Station to Orca. This is Amity Point Light Station to Orca. Come in, Orca."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "answering; via receiver",
                        "text": "Orca. Come in."
                    },
                    {
                        "characters": [
                            {
                                "character": "Sonar Operator",
                                "nameId": "/name/nm5026359/"
                            }
                        ],
                        "stageDirection": "via radio cont",
                        "text": "I have Mrs. Martin Brody here."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Put her on."
                    },
                    {
                        "stageDirection": "Shift back to Brody and Hooper; The shark is circling around the boat"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Come on, Martin! Move, move, move!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "I'm not going out there!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Beyond the edge of the barrels, go to the end of the barrels!"
                    },
                    {
                        "stageDirection": "Brody stops halfway"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Further out!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "What?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "points with his outstretched arm",
                        "text": "Further out!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Why?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Go further out!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "What for?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Will you go to the end of the pulpit, please?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "What?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Will you please go to the end of the pulpit!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "What for?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "stageDirection": "getting his camera out",
                        "text": "I need to have something in the foreground to give it some scale!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "shouts",
                        "text": "Foreground, my ass!"
                    },
                    {
                        "stageDirection": "Scene shifts to Quint"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "rapid fire speech; into the receiver",
                        "text": "Your husband's all right, Mrs. Brody, he's fishin', he just caught a couple of stripers, we'll bring 'em in for dinner, we won't be long, we haven't seen anything yet, over and out!"
                    },
                    {
                        "stageDirection": "Quint hangs up, ending the call"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt4071705",
                "interestingVotes": {
                    "down": 1,
                    "up": 2
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Artist",
                                "nameId": "/name/nm5026794/"
                            }
                        ],
                        "text": "Sh-Shark! The shark! He's going into the pond! The shark's in the estuary!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Now what?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "text": "Michael's in the pond!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Artist",
                                "nameId": "/name/nm5026794/"
                            }
                        ],
                        "text": "In the estuary! The shark's in the pond! He's going in the pond! Somebody do something! In the pond! In the pond! Shark! In the pond!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt4556572",
                "interestingVotes": {
                    "down": 1,
                    "up": 2
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "to Hooper",
                        "text": "Well, why don't we start leading the shark into shore instead of him leading us out to sea?"
                    },
                    {
                        "stageDirection": "Without answering, Hooper looks at Quint, then back at Brody"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5459694",
                "interestingVotes": {
                    "down": 1,
                    "up": 2
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Denherder",
                                "characterId": "/character/ch0002890/",
                                "nameId": "/name/nm0150019/"
                            }
                        ],
                        "text": "Charlie, take my word for it, don't look back! Swim, Charlie! Swim!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5909996",
                "interestingVotes": {
                    "down": 1,
                    "up": 2
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Tom Cassidy",
                                "characterId": "/character/ch0175511/",
                                "nameId": "/name/nm0277204/"
                            }
                        ],
                        "text": "I can swim! I just can't walk or undress myself."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5910350",
                "interestingVotes": {
                    "down": 1,
                    "up": 2
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Did you ever have a Great White do this?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "No!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt3394953",
                "interestingVotes": {
                    "up": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "screaming at Hooper, while Brody wets the reel of his shark-fishing rod",
                        "text": "HOOPER! REVERSE IT!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt3518979",
                "interestingVotes": {
                    "up": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Michael Brody",
                                "characterId": "/character/ch0002866/",
                                "nameId": "/name/nm0714268/"
                            }
                        ],
                        "text": "Pond's for old ladies."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "I know it's for the old ladies, but just do it for the old man, huh? Please?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt4557312",
                "interestingVotes": {
                    "down": 1,
                    "up": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "regarding Sean",
                        "text": "Wanna take him home?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "text": "Back to New York?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "No. Home here."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5910345",
                "interestingVotes": {
                    "down": 1,
                    "up": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "He can't stay down with three barrels. Not with three barrels, he can't."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "What about us?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5910351",
                "interestingVotes": {
                    "down": 1,
                    "up": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "We're headin' in, Brody."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Thank Christ!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5910343",
                "interestingVotes": {
                    "down": 1,
                    "up": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Mr. Hopper, attach the end of this line to the first keg. I gotta get a good shot at that porker's head. - - He's coming. He-he. He's coming. Hooper? Stay clear of the barrel. Hooper?Tie it up, will ya!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Your turn, Quint."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Hooper, where are you? Hooper, hurry it up now. Tie it on. Hurry up, he's coming straight for us. Don't screw it up now!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Don't wait for me."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Come on, Hooper! Hurry it up! Come on. Tie it on!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Now. Now. Kill it, quick! Kill it! Now!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Shoot!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt4565803",
                "interestingVotes": {
                    "down": 2,
                    "up": 1
                },
                "lines": [
                    {
                        "stageDirection": "Hendricks has discovered the remains of a woman on the beach. Brody approaches and sees what's left of the body"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Oh, Jesus."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt4556471",
                "interestingVotes": {
                    "down": 2
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Got a pen, Larry?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Mayor Vaughn",
                                "characterId": "/character/ch0002874/",
                                "nameId": "/name/nm0358069/"
                            }
                        ],
                        "text": "Pen?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "reaching into Vaughn's jacket",
                        "text": "Yeah a PEN, you know..."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt4556545",
                "interestingVotes": {
                    "down": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "stageDirection": "from the crow's nest",
                        "text": "Brody? Start that chum line again, will ya!"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Let Hooper take a turn."
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Hooper drives the boat, Chief."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5322802",
                "interestingVotes": {
                    "down": 2
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "stageDirection": "while typing up the report on Chrissy Watkins",
                        "text": "Polly, if this new filing system is going to work you've gotta keep that outdated stuff off my desk. Just the pending, all right?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Polly",
                                "characterId": "/character/ch0002887/",
                                "nameId": "/name/nm2137043/"
                            }
                        ],
                        "text": "Yes, chief. Now we got a bunch of calls about that karate school. It seems that the nine year olds from the school have been... karateing the picket fences!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5766838",
                "interestingVotes": {
                    "down": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Michael Brody",
                                "characterId": "/character/ch0002866/",
                                "nameId": "/name/nm0714268/"
                            }
                        ],
                        "text": "Aw, Dad, the pond's for old ladies."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "I know it is. But just do it for the old man, will ya?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5909997",
                "interestingVotes": {
                    "down": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Ellen Brody",
                                "characterId": "/character/ch0002873/",
                                "nameId": "/name/nm0308882/"
                            }
                        ],
                        "text": "Listen, Chief, be careful, will ya?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "In this town?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5910349",
                "interestingVotes": {
                    "down": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "He's chasing us. I don't believe it!"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5910344",
                "interestingVotes": {
                    "down": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Well, what do we do now? We're quittin' right?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "We've got one barrel on him. So, we stay out here till we find him again."
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "Yeah, but we could radio in and get a bigger boat out here."
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5910346",
                "interestingVotes": {
                    "down": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "Hopper, get the pump out of the locker in front you, will you?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Brody",
                                "characterId": "/character/ch0313300/",
                                "nameId": "/name/nm0001702/"
                            }
                        ],
                        "text": "We're gonna sink, aren't we?"
                    }
                ],
                "spoiler": false
            },
            {
                "id": "/title/tt0073195/quotes/qt5910348",
                "interestingVotes": {
                    "down": 1
                },
                "lines": [
                    {
                        "characters": [
                            {
                                "character": "Hooper",
                                "characterId": "/character/ch0165770/",
                                "nameId": "/name/nm0000377/"
                            }
                        ],
                        "text": "Did you ever have one do this before?"
                    },
                    {
                        "characters": [
                            {
                                "character": "Quint",
                                "characterId": "/character/ch0002870/",
                                "nameId": "/name/nm0001727/"
                            }
                        ],
                        "text": "No."
                    }
                ],
                "spoiler": false
            }
        ]
    }
const TITLEIDS = ['/title/tt0944947/', '/title/tt0068646/', '/title/tt0073195/',]

export {QUOTE, QUOTE2, QUOTE3, QUOTE4, GENRE, USER, TITLEIDS};
