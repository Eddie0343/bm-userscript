const version = "v9.5.2";
const colors = {
    cTeamBluefor: "#e7a600",
    cTeamOpfor: "rgb(217,86,39)",
    cAdminName: "#00fff7",
    cModAction: "#ff3333",
    cAdminAction: "#37ff00",
    cModName: "#4cffac",
    cTeamKilled: "#ffcc00",
    cLeftServer: "#ff33cc",
    cJoined: "#919191",
    cGrayed: "#919191",
    cTracked: "#919191"
};

const sets = {
    teamKilled: new Set(["team killed"]),
    grayedOut: new Set(["Welcome to gMg! Join our discord at discord.gg/gmgaming", "We offer FREE WHITELIST in exchange for seeding. Discord for more info"]),
    trackedTriggers: new Set(["Welcome to gMg! Join our discord at discord.gg/gmgaming", "We offer FREE WHITELIST in exchange for seeding. Discord for more info", "Auto-Warn | Squads containing MBTs may NOT have infantry in them. No exception",
    "Auto-Warn | Vehicles requiring crewman MUST be manned by 2+ crewman BEFORE leaving main", "Seeding progress degrades over time! Seed regularly to keep it full!", "Auto-Warn | Piloting a Heli? Heli squads MAY NOT contain more than 4 players",
    "Auto-Warn | New pilots are NOT permitted to fly on live servers. Practice on Jensen's, not a live server", "Auto Kick - Username must contain at least two (2) English A-Z characters.", "Welcome to gMg! Be sure to join our discord at discord.gg/gmgaming",
    "There are over 88 million cats kept as pets!", "Auto Kick - Your Steam Community Profile must be set up to play on the server.", "Streaming? Consider a minimum of 15 minutes delay to prevent ghosting.", "Cats have 3 eyelids.", "Pikachu directly translates as 'Sparkly mouse noise'",
    "Sudowoodo is actually a rock type pokemon", "Over 30 billion Pokémon cards have been sold", "If you feel a chill in the air, Gengar is following you. Give up. There is no escape", "Depending on who you ask, the", "Gold and Silver were meant to be the last Pokémon games, but people wanted more!",
    "The original games were programmed by only 4 people!", "Ash's Japanese name is Satoshi, which is the same name as the franchise creator", "The first pokemon games, Red and Green, were released February 27, 1996 in Japan", "The Kanto Region is based on a place in the Region of Honshu, Japan - also called Kanto",
    "No more facts for you. Touch grass.", "The normal body temperature of a cat is between 100.5° and 102.5°F.", "Cats sleep 70% of their lives.", "A cat ran for mayor of Mexico City in 2013.", "A cat’s nose is as unique as a human fingerprint.",
    "A cat called Stubbs was mayor of Talkeetna, Alaska, for 15 years", "Cats only use their meows to talk to humans, not each other.", "There are 44 recognized breeds of cats.", "A cat’s sense of smell is 14x better than a human’s.", "Cats only sweat through their paws and nowhere else on their body.",
    "Studies show that owning a cat is beneficial for your health.", "Cats make around 100 different sounds. Dogs make only about 10.", "During the Middle Ages, cats were associated with witchcraft.", "The oldest cat video dates back to 1894.", "Alongside milk, it is untrue that raw fish is healthy for cats.",
    "Cats have a longer-term memory than dogs.", "The largest pedigree cats are Maine Coon cats, which can weigh 11.3 kg.", "The smallest pedigreed cat is a Singapura, which can weigh just 1.8 kg.", "Cats have", "A cat usually has around 12 whiskers on each side of its face.", "Cats have 1,000 times more data storage than an iPad.",
    "Cats use their whiskers to detect if they can fit through a space.", "The first cat in space was French. She was named Felicette", "Cats can move their ears 180 degrees.", "Cats lick themselves to get your scent off.", "In the original Italian version of Cinderella, the fairy godmother figure was a cat.",
    " A cat’s jaw can’t move sideways, so a cat can’t chew large chunks of food.", "Cat owners are 17% more likely to have a graduate degree.", "Cat people are 11% more likely to be introverted.", "The largest litter of kittens produced 19 kittens.", "Eighty-eight percent of cats in the U.S. are spayed or neutered.",
    "Only 24% of cats who enter animal shelters are adopted ):", "Cats have about 130,000 hairs per square inch.", "Approximately 1/3 of cat owners think their pets are able to read their minds.", "The first cartoon cat was Felix the Cat in 1919.", "A cat has 230 bones in its body. A human has 206.",
    "Cats spend nearly 1/3 of their waking hours cleaning themselves.", "Rome has more homeless cats per square mile than any other city in the world.", "A cat will always sit on your laptop when you are working and late for a deadline.", "A coughed up furball will always find your bare feet no matter how many precautions are taken.",
    "Owning a cat can reduce the risk of a heart attack or stroke by a third.", "Meow", " Evidence suggests domesticated cats have been around since 3600 B.C.", "Auto-Kick | Steam Account must be at least 14 days old to join the server"]),
    leftServer: new Set(["left the server"]),
    joinedServer: new Set(["joined the server"]),
    actionList: new Set([
        "was warned",
        "was kicked",
        "was banned",
        "edited BattleMetrics Ban",
        "added BattleMetrics Ban",
        "deleted BattleMetrics Ban"
    ]),
    adminList: new Set([
        "Cyslez", "Alpha", "Ancap", "AN0THER PERS0N", "DatBlackVan", "Kerosene", "Silverstreak",
        "CobraCommander", "BigWampa", "Mitsue", "THELUKES", "SolusVIP", "ImAnEnganeer",
        "Squad Leader", "DocLovely", "Original90sCup", "Bandit", "Blick",
        "c_Ylance", "CheekyT", "Young Female Cop", "Donkey Gaming", "Dxg", "EDN",
        "goblin vibewizard", "gerbi7", "Mirunamu70", "Momiji", "MrDiggles",
        "MVPGuy", "Notchanka", "PaPatriot76", "Pistol", "Polar",
        "pvt newb", "Quirkycommando", "SmashingThorny", "Smiley", "spoon",
        "Stressed and Depressed", "Tabernac", "TheGreatGrub", "Wxtkins", "Sharky6798",
        "Zer0-1ne", "Mann der Zorn", "MeatSpinDotCom", "Ozymandias", "BojoSlime",
        "Hutch", "CelestialMind", "Jazz", "FPSBucky", "Smeddy", "Roberts", "Wilster"
    ]),
    teamBluefor: new Set([
        "Australian Defence Force", "British Armed Forces", "Canadian Armed Forces",
        "United States Army", "United States Marine Corps", "Turkish Land Forces"
    ]),
    teamOpfor: new Set([
        "Russian Ground Forces", "Middle Eastern Alliance", "Insurgent Forces",
        "Irregular Militia Forces", "People's Liberation Army", "Russian Airborne Forces",
        "PLA Navy Marine Corps", "PLA Amphibious Ground Forces"
    ]),
    adminTerms: new Set([
        "admin", "Admin", "ADMIN", "aDMIN", "to the other team.", ") was disbanded b",
        "requested a list of squads.", "requested a list of squads.", "set the next map to",
        "changed the map to", "requested the next map.", ") forced", "(Global)",
        "requested the current map.", "restarted the match.", "was removed from their squad by Trigger.",
        "requested layer list.", "was removed from their squad by"
    ])
};

function createCopyButton() {
    let button = document.createElement("button");
    button.innerHTML = "Copy Player Info";
    button.id = "copy-button";
    button.style = `
        width: 140px;
        height: 40px;
        background: #222222;
        color: white;
        border: none;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        padding: 2px;
        position: absolute;
        top: 90px;
        left: 0;
        z-index: 99999;
        transition: background 0.3s, box-shadow 0.3s;
    `;

    button.onmouseover = () => {
        button.style.background = darkenColor("#222222", 0.1);
        button.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.15)';
    };
    button.onmouseout = () => {
        button.style.background = '#222222';
        button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    };

    button.addEventListener("click", () => {
        let pSteamID = document.querySelector('[title*="765"]')?.innerText || 'N/A';
        let pEOSID = document.querySelector('[title*="0002"]')?.innerText || 'N/A';
        let pName = document.querySelector("#RCONPlayerPage > h1")?.innerText || 'N/A';

        let text = document.createElement("textarea");
        document.body.appendChild(text);
        text.value = `Name : ${pName}\nSteam64 : ${pSteamID}\nEOS : ${pEOSID}\nCrime : \nTime : \nEvidence/Note : `;
        text.select();
        document.execCommand("copy");
        text.remove();
    });

    document.body.appendChild(button);
}

function createDropdownMenu() {
    let dropdownContainer = document.createElement("div");
    dropdownContainer.id = "note-menu-container";
    dropdownContainer.style = `
        position: absolute;
        top: 140px;
        left: 0;
        z-index: 99999;
    `;

    let button = document.createElement("button");
    button.innerHTML = "Note Menu";
    button.id = "dropdown-button";
    button.style = `
        width: 140px;
        height: 40px;
        background: #222222;
        color: white;
        border: none;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        padding: 2px;
        position: relative;
        transition: background 0.3s, box-shadow 0.3s;
    `;

    button.onmouseover = () => {
        button.style.background = darkenColor("#222222", 0.1);
        button.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.15)';
    };
    button.onmouseout = () => {
        button.style.background = '#222222';
        button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    };

    let firstDropdownMenu = document.createElement("div");
    firstDropdownMenu.id = "first-dropdown-menu";
    firstDropdownMenu.style = `
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background: #222222;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000;
    `;

    let firstOptions = ["Warn", "Kick"];

    firstOptions.forEach(option => {
        let menuItem = document.createElement("button");
        menuItem.innerHTML = option;
        menuItem.style = `
            width: 100%;
            background: #222222;
            color: white;
            border: none;
            padding: 10px;
            text-align: left;
            cursor: pointer;
            transition: background 0.3s;
        `;

        menuItem.onmouseover = () => {
            menuItem.style.background = darkenColor("#222222", 0.1);
        };
        menuItem.onmouseout = () => {
            menuItem.style.background = '#222222';
        };

        menuItem.addEventListener("click", () => {
            handleFirstDropdownSelection(option);
            firstDropdownMenu.style.display = 'none';
        });

        firstDropdownMenu.appendChild(menuItem);
    });

    let secondDropdownMenu = document.createElement("div");
    secondDropdownMenu.id = "second-dropdown-menu";
    secondDropdownMenu.style = `
        display: none;
        position: absolute;
        top: 100%;
        left: 71%;
        background: #222222;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000
    `;

    function handleFirstDropdownSelection(selection) {
        secondDropdownMenu.innerHTML = '';

        const options = selection === "Kick" ? {
            "Trolling": "Player was Kicked for Trolling",
            "Teamkilling": "Player was Kicked for Teamkilling",
            "Asset Wasting": "Player was Kicked for Asset Wasting",
            "Squad Edging": "Player was Kicked for Squad Seeding",
            "Armor Rules": "Player was Kicked for Breaking Armor Rules, leaving Main without a second Crewman",
            "MBT Rules": "Player was Kicked for Breaking MBT Rules, having INF in a MBT squad",
            "Heli Rules": "Player was Kicked for Breaking Heli Rules, Flying a Heli with a Squad with more than 4 people in the Squad",
            "Maincamping": "Player was Kicked for Maincamping"
        } : {
            "Trolling": "Player was Warned for Trolling",
            "Teamkilling": "Player was Warned for Teamkilling",
            "Asset Wasting": "Player was Warned for Asset Wasting",
            "Squad Edging": "Player was Warned for Squad Seeding",
            "Armor Rules": "Player was Warned for Breaking Armor Rules, leaving Main without a second Crewman",
            "MBT Rules": "Player was Warned for Breaking MBT Rules, having INF in a MBT squad",
            "Heli Rules": "Player was Warned for Breaking Heli Rules, Flying a Heli with a Squad with more than 4 people in the Squad",
            "Maincamping": "Player was Warned for Maincamping"
        };

        Object.keys(options).forEach(label => {
            let menuItem = document.createElement("button");
            menuItem.innerHTML = label;
            menuItem.style = `
                width: 100%;
                background: #222222;
                color: white;
                border: none;
                padding: 10px;
                text-align: left;
                cursor: pointer;
                transition: background 0.3s;
            `;

            menuItem.onmouseover = () => {
                menuItem.style.background = darkenColor("#222222", 0.1);
            };
            menuItem.onmouseout = () => {
                menuItem.style.background = '#222222';
            };

            menuItem.addEventListener("click", () => {
                let text = document.createElement("textarea");
                document.body.appendChild(text);
                text.value = options[label];
                text.select();
                document.execCommand("copy");
                text.remove();
                secondDropdownMenu.style.display = 'none';
            });

            secondDropdownMenu.appendChild(menuItem);
        });

        secondDropdownMenu.style.display = 'block';
    }

    button.addEventListener("click", () => {
        let isFirstMenuVisible = firstDropdownMenu.style.display === 'block';
        firstDropdownMenu.style.display = isFirstMenuVisible ? 'none' : 'block';
        secondDropdownMenu.style.display = 'none';
    });

    document.addEventListener("click", (event) => {
        if (!dropdownContainer.contains(event.target)) {
            firstDropdownMenu.style.display = 'none';
            secondDropdownMenu.style.display = 'none';
        }
    });

    dropdownContainer.appendChild(button);
    dropdownContainer.appendChild(firstDropdownMenu);
    dropdownContainer.appendChild(secondDropdownMenu);

    document.body.appendChild(dropdownContainer);
}

function darkenColor(color, percent) {
    let f = parseInt(color.slice(1), 16),
        t = percent < 0 ? 0 : 255,
        p = percent < 0 ? percent * -1 : percent,
        R = f >> 16,
        G = f >> 8 & 0x00FF,
        B = f & 0x0000FF;
    return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1).toUpperCase();
}

function removeCopyButton() {
    const button = document.getElementById("copy-button");
    if (button) {
        button.remove();
    }
}

function removeNoteMenu() {
    const container = document.getElementById("note-menu-container");
    if (container) {
        container.remove();
    }
}

function mainScript() {
    setInterval(() => {
        if (document.querySelector("#RCONPlayerPage")) {
            if (!document.getElementById("copy-button")) {
                createCopyButton();
            }
            if (!document.getElementById("dropdown-button")) {
                createDropdownMenu();
            }
        } else {
            removeCopyButton();
            removeNoteMenu();
        }

        let spans = document.querySelectorAll(".css-q39y9k");
        spans.forEach(span => {
            let steamID = span.title;
            let a = document.createElement("a");
            [...span.attributes].forEach(attr => a.attributes.setNamedItem(attr.cloneNode()));
            a.href = `https://communitybanlist.com/search/${steamID}`;
            a.innerHTML = steamID;
            a.target = "_blank";
            span.replaceWith(a);
        });

    }, 1000);
}

setTimeout(mainScript, 1500);

setTimeout(function ModifyCSS() {
    const styles = {
        zShift: ".css-ym7lu8 {z-index: 2;}",
        zShiftTime: ".css-z1s6qn {z-index: 3;}",
        zShiftTimeDate: ".css-1jtoyp {z-index: 3;}",
        teamkillBar: ".css-1tuqie1 {background-color: #5600ff1a;width: 1920px}",
        moderationBar: ".css-1rwnm41 {background-color: #ff000008;width: 1920px;}",
        nobranding: "html body div#root div.css-0.e1f2e1y80 div#RCONLayout.css-1qipodg nav.css-l5wv20 ul.css-1nlygfx li.css-1nxi32t a img#poweredbyovh {background-color: #31e3ff21;width: 1920px}",
    };

    Object.values(styles).forEach(style => GM_addStyle(style));

    const buttonContainer = document.createElement("div");
    buttonContainer.style = "position: absolute; top: 10px; right: 5%; z-index: 99999;";
    document.body.appendChild(buttonContainer);

    function createButton(id, label, url, backgroundColor) {
        const button = document.createElement("button");
        button.id = id;
        button.textContent = label;
        button.onclick = () => window.open(url, '_blank');
        button.style = `
            width: 60px;
            height: 30px;
            background: ${backgroundColor};
            color: white;
            border: none;
            border-radius: 5px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            font-size: 12px;
            font-weight: bold;
            cursor: pointer;
            margin-right: 5px;
            padding: 2px;
            transition: background 0.3s, box-shadow 0.3s;
        `;
        button.onmouseover = () => {
            button.style.background = darkenColor(backgroundColor, 0.1);
            button.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.15)';
        };
        button.onmouseout = () => {
            button.style.background = backgroundColor;
            button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        };
        buttonContainer.appendChild(button);
    }

    createButton("NPFbutton", "N", "https://www.battlemetrics.com/rcon/servers/16084215", "green");
    createButton("Eventbutton", "E", "https://www.battlemetrics.com/rcon/servers/24380801", "green");
    createButton("SquadMaps", "M", "https://squadmaps.com/", "orange");
    createButton("version", version, "https://greasyfork.org/en/scripts/501133-battlemetrics-toolkit-desktop-auto-update?locale_override=1", "black");

}, 1000);

setTimeout(() => {
    setInterval(function Main_Script() {
        let namePlayers = document.querySelectorAll(".css-1ewh5td");
        let nameActivity = document.querySelectorAll(".css-fj458c");
        let messageLog = document.querySelectorAll(".css-ym7lu8");

        function applyColor(elements, set, color) {
            elements.forEach(element => {
                for (let phrase of set) {
                    if (element.textContent.includes(phrase)) {
                        element.style.color = color;
                        break;
                    }
                }
            });
        }

        function adminApplyColor(elements, phrases, color) {
            elements.forEach(el => {
                phrases.forEach(phrase => {
                    const regex = new RegExp(`(\\b${phrase}\\b)`, "i");
                    if (regex.test(el.textContent)) {
                        el.style.color = color;
                    }
                });
            });
        }

        applyColor(messageLog, sets.adminTerms, colors.cAdminAction);
        applyColor(messageLog, sets.grayedOut, colors.cGrayed);
        applyColor(messageLog, sets.joinedServer, colors.cJoined);
        applyColor(messageLog, sets.leftServer, colors.cLeftServer);
        applyColor(messageLog, sets.actionList, colors.cModAction);
        applyColor(messageLog, sets.teamBluefor, colors.cTeamBluefor);
        applyColor(messageLog, sets.teamOpfor, colors.cTeamOpfor);
        applyColor(messageLog, sets.teamKilled, colors.cTeamKilled);
        applyColor(messageLog, sets.trackedTriggers, colors.cTracked);
        adminApplyColor(nameActivity, sets.adminList, colors.cAdminName);
        adminApplyColor(namePlayers, sets.adminList, colors.cAdminName);

        let timeStampElements = document.querySelectorAll(".css-z1s6qn");
        timeStampElements.forEach(element => {
            let utcTime = element.getAttribute("datetime");
            if (utcTime) {
                let date = new Date(utcTime);
                if (!isNaN(date.getTime())) {
                    let titleDate = new Date(date);
                    titleDate.setHours(date.getHours(), date.getMinutes(), date.getSeconds());
                    element.setAttribute("title", titleDate.toLocaleString());
                } else {
                    console.error(`Invalid Date: ${utcTime}`);
                }
            } else {
                console.error('No datetime attribute found');
            }
        });

        const navTools = {
            changeMapWarning: [
                { phrase: "Change Layer", styles: { color: "red", fontStyle: "bold", textAlign: "center", fontSize: "100pt" } },
                { phrase: "Set Next Layer", styles: { color: "lime", fontStyle: "bold", textAlign: "center", fontSize: "50pt" } },
                { phrase: "Kick", styles: { color: "orange", fontStyle: "bold", textAlign: "center", fontSize: "48pt" } },
                { phrase: "Warn", styles: { color: "lime", fontStyle: "bold", textAlign: "center", fontSize: "24pt" } }
            ],
            playerMenuDialog: [
                { phrase: "Warn", styles: { color: "lime" } },
                { phrase: "Squad List", styles: { color: "gold" } },
                { phrase: "Kick", styles: { color: "orange" } },
                { phrase: "Ban", styles: { color: "red" } }
            ],
            playerDialog: [
                { phrase: "Warn", styles: { color: "lime" } },
                { phrase: "Squad List", styles: { color: "gold" } },
                { phrase: "Kick", styles: { color: "orange" } },
                { phrase: "Ban", styles: { color: "red" } }
            ],
            serverCommands: [
                { phrase: "Next Layer", styles: { color: "lime", fontSize: "16pt" } },
                { phrase: "Change Layer", styles: { color: "red", fontStyle: "bold", fontSize: "8pt" } },
                { phrase: "Squad List", styles: { color: "gold", fontSize: "16pt" } },
                { phrase: "Kick", styles: { color: "orange" } },
                { phrase: "Ban", styles: { color: "red" } },
                { phrase: "Warn", styles: { color: "lime" } }
            ]
        };

        function applyStyles(elements, styles) {
            elements.forEach(el => {
                styles.forEach(({ phrase, styles }) => {
                    if (el.textContent.includes(phrase)) {
                        Object.assign(el.style, styles);
                    }
                });
            });
        }

        applyStyles(document.querySelectorAll(".modal-title"), navTools.changeMapWarning);
        applyStyles(document.querySelectorAll(".css-f5o5h6 a, .css-f5o5h6 button"), navTools.playerMenuDialog);
        applyStyles(document.querySelectorAll(".css-1ixz43s a, .css-1ixz43s button"), navTools.playerDialog);
        applyStyles(document.querySelectorAll(".css-yun63y a, .css-yun63y button"), navTools.serverCommands);
    }, 100);
}, 150);
