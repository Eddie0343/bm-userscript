const version = "v9.7.9";
const updateRate = "150"
const colors = {
    cTeamBluefor: "#e7a600",
    cTeamPac: "#34804d",
    cTeamOpfor: "#d95627",
    cTeamIndep: "#eaff00",
    cAdminName: "#00fff7",
    cModAction: "#ff3333",
    cAdminAction: "#37ff00",
    cTeamKilled: "#ffcc00",
    cLeftServer: "#ff33cc",
    cJoined: "#919191",
    cTracked: "#919191"
};

const styles = {
    zShift: ".css-ym7lu8 {z-index: 2;}",
    zShiftTime: ".css-z1s6qn {z-index: 3;}",
    zShiftTimeDate: ".css-1jtoyp {z-index: 3;}",
    nobranding: "#poweredbyovh {width: 100vw; max-width: 100%}",
};

const sets = {
    teamKilled: new Set(["team killed"]),
    trackedTriggers: new Set(["Welcome to gMg!", "We offer FREE WHITELIST", "Auto-Warn | Squads containing MBTs", "Auto-Warn | Vehicles requiring crewman", "Seeding progress degrades", "Auto-Warn | Piloting a Heli?",
    "Auto-Warn | New pilots are NOT permitted", "Auto Kick - Username must contain", "Welcome to gMg! Be sure to join", "You are earning FREE",
    "There are over 88", "Auto Kick - Your Steam Community", "Streaming? Consider a minimum", "Cats have 3 eyelids.", "Pikachu directly",
    "Sudowoodo is actually", "Over 30 billion", "If you feel a chill", "Depending on who you ask, the", "Gold and Silver were meant",
    "The original games were", "Ash's Japanese", "The first pokemon games", "The Kanto Region", "Join a squad, you are unassigned and will be kicked",
    "No more facts for you. Touch grass.", "The normal body temperature of a cat", "Cats sleep 70% of", "A cat ran for mayor", "A cat’s nose is",
    "A cat called Stubbs", "Cats only use their", "There are 44", "A cat’s sense of", "Cats only sweat through", "Seeding Reward:",
    "Studies show that owning", "Cats make around 100", "During the Middle Ages", "The oldest cat video", "Alongside milk, it",
    "Cats have a longer-term", "The largest pedigree", "The smallest pedigreed", "Cats have", "A cat usually has around", "Cats have 1,000 times",
    "Cats use their whiskers", "The first cat in space", "Cats can move their", "Cats lick themselves", "In the original Italian",
    " A cat’s jaw can’t move", "Cat owners are 17%", "Cat people are 11%", "The largest litter of", "Eighty-eight percent of",
    "Only 24% of cats", "Cats have about 130,000", "Approximately 1/3 of cat", "The first cartoon cat", "A cat has 230 bones",
    "Cats spend nearly 1/3 of", "Rome has more homeless cats", "A cat will always sit", "A coughed up furball will",
    "Owning a cat can reduce", "Meow", " Evidence suggests domesticated", "Auto-Kick | Steam Account must be at least 14 days"]),
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
    adminList: new Set(),

    teamBluefor: new Set([
        "Australian Defence Force",
        "British Armed Forces",
        "Canadian Armed Forces",
        "United States Army",
        "United States Marine Corps"
    ]),
    teamPac: new Set([
        "People's Liberation Army",
        "PLA Amphibious Ground Forces",
        "PLA Navy Marine Corps"
    ]),

    teamOpfor: new Set([
        "Russian Airborne Forces",
        "Russian Ground Forces"
    ]),

    teamIndep: new Set([
        "Western Private Military Contractors",
        "Middle Eastern Alliance",
        "Turkish Land Forces",
        "Middle Eastern Insurgents",
        "Irregular Militia Forces",
        "Western Private Military Contractors"
    ]),

    adminTerms: new Set([
        "admin",
        "Admin",
        "ADMIN",
        "aDMIN",
        "to the other team.",
        ") was disbanded b",
        "requested a list of squads.",
        "set the next map to",
        "changed the map to",
        "requested the next map.",
        ") forced",
        "AdminRenameSquad",
        "(Global)",
        "executed Player Action Action",
        "requested the current map.",
        "restarted the match.",
        "Squad disband - SL",
        "was removed from their squad by Trigger.",
        "requested layer list.",
        "was removed from their squad by",
        "added flag",
        "removed flag",
    ]),
};

function isAdmin(username) {
    return sets.adminList.has(username);
}

async function fetchAdminList() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/Eddie0343/Bmlist/main/adminList.json?");
        if (!response.ok) throw new Error("Failed to fetch admin list");
        const data = await response.json();
        sets.adminList = new Set(data.admins);
        console.log("Admin list updated:", sets.adminList);
    } catch (error) {
        console.error("Error fetching admin list:", error);
    }
}

async function runCode() {
    console.log("Fetching admin list");
    await fetchAdminList();

    console.log("Running initial one-time code...");

    function GM_addStyleElements() {
        const styles = {
            zShift: ".css-ym7lu8 {z-index: 2;}",
            zShiftTime: ".css-z1s6qn {z-index: 3;}",
            zShiftTimeDate: ".css-1jtoyp {z-index: 3;}",
            nobranding: "#RCONLayout > nav > ul > li.css-1nxi32t > a {width: 100vw; max-width: 100%}",
        };

        Object.values(styles).forEach((style) => GM_addStyle(style));

    } GM_addStyleElements()

    function darkenColor(color, percent) {
    let f = parseInt(color.slice(1), 16),
        t = percent < 0 ? 0 : 255,
        p = percent < 0 ? percent * -1 : percent,
        R = f >> 16,
        G = f >> 8 & 0x00FF,
        B = f & 0x0000FF;
    return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1).toUpperCase();
    }

    function cornerBtns() {
        const btns = [
        { id: "NPFbutton", label: "N", url: "https://www.battlemetrics.com/rcon/servers/16084215", backgroundColor: "green" },
        { id: "Eventbutton", label: "E", url: "https://www.battlemetrics.com/rcon/servers/24380801", backgroundColor: "green" },
        { id: "SquadMaps", label: "M", url: "https://squadmaps.com/", backgroundColor: "orange" },
        { id: "version", label: version, url: "https://greasyfork.org/en/scripts/501133-battlemetrics-toolkit-desktop-auto-update?locale_override=1", backgroundColor: "black", fontSize: "6pt" }
    ];
        const btnCont = Object.assign(document.createElement("div"), {
        style: "position: absolute; top: 10px; right: 5%; z-index: 99999;"
    });
        document.body.appendChild(btnCont);

        btns.forEach(({ id, label, url, backgroundColor }) => {
            const btn = Object.assign(document.createElement("input"), {
                type: "button", id, value: label,
                style: `width: 60px; height: 30px; background: ${backgroundColor}; color: white; border: none; border-radius: 5px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); font-size: 12px; font-weight: bold; cursor: pointer; margin-right: 5px; padding: 2px; transition: background 0.3s, box-shadow 0.3s;`,
                onclick: () => window.open(url, '_blank')
        });
        btn.onmouseover = () => {
            btn.style.background = darkenColor(backgroundColor, 0.1);
            btn.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.15)';
        };
        btn.onmouseout = () => {
            btn.style.background = backgroundColor;
            btn.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        };
        btnCont.appendChild(btn);
    });
} cornerBtns();

    let isFetching = false;

    async function updateLogic() {

        await new Promise(resolve => setTimeout(resolve, updateRate));

        if (document.querySelector('.ReactVirtualized__Grid__innerScrollContainerddd') || document.querySelector('.css-b7r34x')) {

            function applyTimeStamps() {
                let timeStampElements = document.querySelectorAll(".css-z1s6qn");
                timeStampElements.forEach(element => {
                    let utcTime = element.getAttribute("datetime");
                    if (utcTime) {
                        let date = new Date(utcTime);
                        if (!isNaN(date.getTime())) {
                            element.setAttribute("title", date.toLocaleString(undefined, {
                                timeZoneName: 'short'
                            }));
                        }
                    }
                });
            } applyTimeStamps();

            function logColoring() {
                let namePlayers = document.querySelectorAll(".css-1ewh5td");
                let nameActivity = document.querySelectorAll(".css-fj458c");
                let messageLog = document.querySelectorAll(".css-ym7lu8");

                function applyColor(elements, set, color) {
                    elements.forEach((element) => {
                        for (let phrase of set) {
                            if (element.textContent.includes(phrase)) {
                                element.style.color = color;
                                break;
                            }
                        }
                    });
                }

                function adminApplyColor(elements, phrases, color) {
                    elements.forEach(function (el) {
                        phrases.forEach(function (phrase) {
                            const regex = new RegExp(`(\\b${phrase}\\b)`);
                            if (regex.test(el.textContent)) {
                                el.style.color = color;
                            }
                        });
                    });
                }

                applyColor(messageLog, sets.adminTerms, colors.cAdminAction);
                applyColor(messageLog, sets.joinedServer, colors.cJoined);
                applyColor(messageLog, sets.leftServer, colors.cLeftServer);
                applyColor(messageLog, sets.actionList, colors.cModAction);
                applyColor(messageLog, sets.teamBluefor, colors.cTeamBluefor);
                applyColor(messageLog, sets.teamPac, colors.cTeamPac);
                applyColor(messageLog, sets.teamOpfor, colors.cTeamOpfor);
                applyColor(messageLog, sets.teamIndep, colors.cTeamIndep);
                applyColor(messageLog, sets.teamKilled, colors.cTeamKilled);
                applyColor(messageLog, sets.trackedTriggers, colors.cTracked);
                adminApplyColor(nameActivity, sets.adminList, colors.cAdminName);
                adminApplyColor(namePlayers, sets.adminList, colors.cAdminName);
            }
            logColoring();

            function createDrop() {
                let dropCont = document.createElement("div");
                dropCont.id = "note-menu-cont";
                dropCont.style = `position: absolute; top: 140px; left: 0; z-index: 99999;`;

                let btn = document.createElement("button");
                btn.innerHTML = "Note Menu";
                btn.id = "drop-button";
                btn.style = `width: 140px; height: 40px;background: #222222; color: white; border: none; border-radius: 5px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); font-size: 14px; font-weight: bold; cursor: pointer; padding: 2px; position: relative; transition: background 0.3s, box-shadow 0.3s;`;

                btn.onmouseover = () => {
                    btn.style.background = darkenColor("#222222", 0.1);
                    btn.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.15)';
                };
                btn.onmouseout = () => {
                    btn.style.background = '#222222';
                    btn.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                };

                let fstDropMenu = document.createElement("div");
                fstDropMenu.id = "first-dropdown-menu";
                fstDropMenu.style = `display: none; position: absolute; top: 100%; left: 0; background: #222222; border: none; border-radius: 5px; z-index: 1000;`;

                let firstOptions = ["Warn", "Kick"];

                firstOptions.forEach(option => {
                    let menuItem = document.createElement("button");
                    menuItem.innerHTML = option;
                    menuItem.style = `width: 100%; background: #222222; color: white; border: none; border-radius: 5px; padding: 10px; text-align: left; cursor: pointer; transition: background 0.3s;`;

                    menuItem.onmouseover = () => {
                        menuItem.style.background = darkenColor("#222222", 0.1);
                    };
                    menuItem.onmouseout = () => {
                        menuItem.style.background = '#222222';
                    };

                    menuItem.addEventListener("click", () => {
                        dropSelection(option);
                        fstDropMenu.style.display = 'none';
                    });

                    fstDropMenu.appendChild(menuItem);
                });

                let sndMenu = document.createElement("div");
                sndMenu.id = "snd-drop-menu";
                sndMenu.style = `display: none; position: absolute; top: 100%; left: 71%; background: #222222; border: none; border-radius: 5px; z-index: 1000`;

                function dropSelection(selection) {
                    sndMenu.innerHTML = '';

                    const options = selection === "Kick" ? {
                        "Trolling": "Player was Kicked for Trolling",
                        "Teamkilling": "Player was Kicked for Teamkilling",
                        "Asset Wasting": "Player was Kicked for Asset Wasting",
                        "Squad Edging": "Player was Kicked for Squad Seeding",
                        "Armor Rules": "Player was Kicked for Breaking Armor Rules, leaving Main without a second Crewman",
                        "MBT Rules": "Player was Kicked for Breaking MBT Rules, having INF in a MBT squad",
                        "Heli Rules": "Player was Kicked for Breaking Heli Rules, Flying a Heli with a Squad with more than 4 people in the Squad",
                        "Maincamping": "Player was Kicked for Maincamping",
                        "Practice flying": "Player was Kicked for Not being able to Fly the Heli without Crashing",
                        "Seeding Rules": "Player was Kicked for Breaking Seeding Rules",
                        "Spawn Camping": "Player was Kicked for Spawn Camping on Jensens"
                    } : {
                        "Trolling": "Player was Warned for Trolling",
                        "Teamkilling": "Player was Warned for Teamkilling",
                        "Asset Wasting": "Player was Warned for Asset Wasting",
                        "Squad Edging": "Player was Warned for Squad Seeding",
                        "Armor Rules": "Player was Warned for Breaking Armor Rules, leaving Main without a second Crewman",
                        "MBT Rules": "Player was Warned for Breaking MBT Rules, having INF in a MBT squad",
                        "Heli Rules": "Player was Warned for Breaking Heli Rules, Flying a Heli with a Squad with more than 4 people in the Squad",
                        "Maincamping": "Player was Warned for Maincamping",
                        "Practice flying": "Player was Warned for Not being able to Fly the Heli without Crashing",
                        "Seeding Rules": "Player was Warned for Breaking Seeding Rules",
                        "Spawn Camping": "Player was Warned for Spawn Camping on Jensens"
                    };

                    Object.keys(options).forEach(label => {
                        let menuItem = document.createElement("button");
                        menuItem.innerHTML = label;
                        menuItem.style = `width: 100%; background: #222222; color: white; border: none; border-radius: 5px; padding: 10px; text-align: left; cursor: pointer; transition: background 0.3s;`;

                        menuItem.onmouseover = () => {
                            menuItem.style.background = darkenColor("#222222", 0.1);
                        };
                        menuItem.onmouseout = () => {
                            menuItem.style.background = '#222222';
                        };

                        menuItem.addEventListener("click", () => {
                            const selectedText = options[label];
                            insertText(selectedText);
                            sndMenu.style.display = 'none';
                        });

                        sndMenu.appendChild(menuItem);
                    });

                    sndMenu.style.display = 'block';
                }

                btn.addEventListener("click", () => {
                    let isFstMenuVisible = fstDropMenu.style.display === 'block';
                    fstDropMenu.style.display = isFstMenuVisible ? 'none' : 'block';
                    sndMenu.style.display = 'none';
                });

                document.addEventListener("click", (event) => {
                    if (!dropCont.contains(event.target)) {
                        fstDropMenu.style.display = 'none';
                        sndMenu.style.display = 'none';
                    }
                });

                dropCont.appendChild(btn);
                dropCont.appendChild(fstDropMenu);
                dropCont.appendChild(sndMenu);

                document.body.appendChild(dropCont);
            }

            function insertText(text) {
                const editableField = document.querySelector('.tiptap.ProseMirror[contenteditable="true"]');

                if (editableField) {
                    editableField.innerHTML = `<p>${text}</p>`;
                    editableField.focus();
                    window.getSelection().collapse(editableField, 1);
                }
            }

            function cpyBtnANDSteamIDs() {
                function createCpyBtn() {
                    const btn = document.createElement("button");
                    btn.id = "cpy-button";
                    btn.textContent = "Copy Player Info";
                    btn.classList.add("cpy-button-style");

                    document.body.appendChild(btn);

                    btn.addEventListener("click", () => {
                        const pSteamID = getInnerTextByTitle("765", "SteamID MISSING?");
                        const pEOSID = getInnerTextByTitle("0002", "");
                        const pName = document.querySelector("#RCONPlayerPage > h1")?.innerText || 'NAME MISSING?';
                        const banInfo = document.querySelector(".collapse.in ul li a span")?.innerText || '';
                        const pBan = banInfo.split(' - ')[1]?.split(' | Expires')[0]?.trim() || '';
                        const pTime = banInfo.match(/\| Expires: ([^|]+)/)?.[1]?.trim() || '';

                        const textToCpy = `Name : ${pName}\nSteam64 : ${pSteamID}\nEOS : ${pEOSID}\nCrime : ${pBan}\nTime : ${pTime}\nEvidence/Note : `;
                        cpyToClip(textToCpy);

                    });
                    btnStyles();
                }

                function btnStyles() {
                    const style = document.createElement("style");
                    style.innerHTML =
                        ".cpy-button-style {" +
                        "width: 140px;" +
                        "height: 40px;" +
                        "background: #222222;" +
                        "color: white;" +
                        "border: none;" +
                        "border-radius: 3px;" +
                        "box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" +
                        "font-size: 14px;" +
                        "font-weight: bold;" +
                        "cursor: pointer;" +
                        "padding: 2px;" +
                        "position: absolute;" +
                        "top: 90px;" +
                        "left: 0;" +
                        "z-index: 99999;" +
                        "transition: background 0.3s, box-shadow 0.3s;" +
                        "}" +
                        ".cpy-button-style:hover, .note-menu-style:hover {" +
                        "background: #383838;" +
                        "box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);" +
                        "}";
                    document.head.appendChild(style);
                }

                function getInnerTextByTitle(titlePart, defaultValue) {
                    return document.querySelector(`[title*="${titlePart}"]`)?.innerText || defaultValue;
                }

                const graphqlEndpoint = "https://communitybanlist.com/graphql";
                async function runDataFetching() {
                    if (isFetching) {
                        console.log("Data fetching is already in progress. Skipping...");
                        return;
                    }

                    const pSteamID = getInnerTextByTitle("765", "SteamID MISSING?");
                    if (pSteamID && pSteamID !== "SteamID MISSING?") {
                        try {
                            isFetching = true;
                            await fetchSteamUserData(pSteamID);
                        } catch (error) {
                            console.error("Error fetching Steam user data:", error);
                        } finally {
                            isFetching = false;
                        }
                    } else {
                        console.error("Invalid Steam ID");
                    }
                }

                async function fetchSteamUserData(steamID) {

                    await new Promise(resolve => setTimeout(resolve,500));

                    const maxRetries = 1;
                    const retryDelay = 3000;
                    let attempt = 0;
                    let success = false;

                    while (attempt < maxRetries && !success) {
                        try {
                            attempt++;
                            console.log(`Attempt ${attempt}: Fetching user data for SteamID ${steamID}`);

                            const response = await fetch(graphqlEndpoint, {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                    query: `query Search($id: String!) { steamUser(id: $id) { reputationPoints activeBans: bans(orderBy: "created", orderDirection: DESC, expired: false) { edges { node { id } } } expiredBans: bans(orderBy: "created", orderDirection: DESC, expired: true) { edges { node { id } } } } }`,
                                    variables: { id: steamID },
                                }),
                            });

                            if (!response.ok) {
                                throw new Error(`HTTP error! Status: ${response.status} (${response.statusText})`);
                            }

                            const data = await response.json();
                            if (!data || !data.data || !data.data.steamUser) {
                                throw new Error("Invalid response format or user not found.");
                            }

                            const user = data.data.steamUser;
                            const reputationPoints = user.reputationPoints || "N/A";
                            const activeBansCount = user.activeBans.edges.length || 0;
                            const expiredBansCount = user.expiredBans.edges.length || 0;

                            displayUserData(reputationPoints, activeBansCount, expiredBansCount);
                            console.log("Fetch successful!");
                            success = true;

                        } catch (error) {
                            console.error(`Attempt ${attempt} failed: ${error.message}`, error);
                            if (attempt < maxRetries) {
                                console.log(`Retrying in ${retryDelay / 1000} seconds...`);
                                await new Promise(resolve => setTimeout(resolve, retryDelay));
                            } else {
                                console.error("Max retries reached. Fetch operation failed.");
                                displayUserData("N/A", "N/A", 0);
                                success = true;
                            }
                        }
                    }
                }

                function displayUserData(reputationPoints, activeBansCount, expiredBansCount) {
                    const CBL = document.createElement("div");
                    CBL.id = "CBL-info";
                    CBL.style = `width: 140px; height: 105px; top: 190px; background: #222222; color: white; border: none; border-radius: 5px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); padding: 2px; position: absolute; text-align: center; z-index: 99998;`;

                    let repColor = "white";
                    if (reputationPoints >=1 && reputationPoints <= 5) {
                        repColor = "orange";
                    } else if (reputationPoints > 5) {
                        repColor = "red";
                    }

                    CBL.innerHTML = `<h4 style="font-size: 14px; font-weight: bold; color: ${repColor};">Reputation Points: ${reputationPoints}</h4> <h4 style="font-size: 14px; font-weight: bold;">Active Bans: ${activeBansCount}</h4> <h4 style="font-size: 14px; font-weight: bold;">Expired Bans: ${expiredBansCount}</h4>`;

                    document.body.appendChild(CBL);
                }

                function cpyToClip(text) {
                    const textarea = document.createElement("textarea");
                    textarea.style.position = 'fixed';
                    textarea.style.opacity = '0';
                    textarea.value = text;
                    document.body.appendChild(textarea);
                    textarea.select();
                    document.execCommand("copy");
                    document.body.removeChild(textarea);
                }

                function replaceSteamIDSpans() {
                    const spans = document.querySelectorAll(".css-q39y9k");
                    spans.forEach(span => {
                        const steamID = span.title;
                        if (steamID.startsWith('765') && !span.getAttribute('data-processed')) {
                            const anchor = document.createElement("a");
                            Array.from(span.attributes).forEach(attr => anchor.setAttribute(attr.name, attr.value));
                            anchor.href = "https://communitybanlist.com/search/" + steamID;
                            anchor.innerHTML = steamID;
                            anchor.target = "_blank";
                            span.replaceWith(anchor);
                            anchor.setAttribute('data-processed', 'true');
                        }
                    });
                }

                const playerPageExists = document.querySelector("#RCONPlayerPage");

                if (playerPageExists) {
                    ensureElementExists("cpy-button", createCpyBtn);
                    ensureElementExists("note-menu-cont", createDrop);
                    ensureElementExists("CBL-info", runDataFetching);
                } else {
                    removeElementById("cpy-button");
                    removeElementById("note-menu-cont");
                    removeElementById("CBL-info");
                }
                replaceSteamIDSpans();

                function ensureElementExists(elementId, creationFunction) {
                    if (!document.getElementById(elementId)) {
                        creationFunction();
                    }
                }

                function removeElementById(elementId) {
                    const element = document.getElementById(elementId);
                    if (element) {
                        element.remove();
                    }
                }
            } cpyBtnANDSteamIDs()

            function colorDialogMenus() {
                const navTools = {
                    changeMapWarning: [
                        {
                            phrase: "Change Layer",
                            styles: {
                                color: "red",
                                fontStyle: "bold",
                                textAlign: "center",
                                fontSize: "100pt",
                            },
                        },
                        {
                            phrase: "Set Next Layer",
                            styles: {
                                color: "lime",
                                fontStyle: "bold",
                                textAlign: "center",
                                fontSize: "50pt",
                            },
                        },
                        {
                            phrase: "Kick",
                            styles: {
                                color: "orange",
                                fontStyle: "bold",
                                textAlign: "center",
                                fontSize: "48pt",
                            },
                        },
                        {
                            phrase: "Warn",
                            styles: {
                                color: "lime",
                                fontStyle: "bold",
                                textAlign: "center",
                                fontSize: "24pt",
                            },
                        },
                    ],
                    playerMenuDialog: [
                        { phrase: "Warn", styles: { color: "lime" } },
                        { phrase: "Squad List", styles: { color: "gold" } },
                        { phrase: "Kick", styles: { color: "orange" } },
                        { phrase: "Ban", styles: { color: "red" } },
                    ],
                    serverCommands: [
                        { phrase: "Ban", styles: { color: "red" } },
                        { phrase: "Next Layer", styles: { color: "lime", fontSize: "16pt" } },
                        { phrase: "Change Layer", styles: { color: "red", fontStyle: "bold", fontSize: "8pt" } },
                        { phrase: "Squad List", styles: { color: "gold", fontSize: "16pt" } },
                    ]
                };

                function applyStyles(elements, styles) {
                    elements.forEach((el) => {
                        styles.forEach(({ phrase, styles }) => {
                            if (el.textContent.includes(phrase)) {
                                Object.assign(el.style, styles);
                            }
                        });
                    });
                };

                setTimeout(() => {
                    applyStyles(
                        document.querySelectorAll(".modal-title"),
                        navTools.changeMapWarning
                    );
                    applyStyles(
                        document.querySelectorAll(".css-f5o5h6 a, .css-f5o5h6 button"),
                        navTools.playerMenuDialog
                    );
                    applyStyles(
                        document.querySelectorAll(".css-1ixz43s a, .css-1ixz43s button"),
                        navTools.playerMenuDialog
                    );
                    applyStyles(
                        document.querySelectorAll(".css-yun63y a, .css-yun63y button"),
                        navTools.serverCommands
                    );
                }, 300)

            } colorDialogMenus();
        }
    }

    setInterval(async () => {
        await updateLogic();
    }, updateRate);
}

function observeDOMChanges() {
    const observer = new MutationObserver((mutationsList, observer) => {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList' || mutation.type === 'attributes') {
                const targetElement1 = document.querySelector('.ReactVirtualized__Grid__innerScrollContainer');
                const targetElement2 = document.querySelector('.navbar-brand');

                if (targetElement1 || targetElement2) {
                    console.log("Target element detected. Starting code...");
                    observer.disconnect();
                    runCode();
                    break;
                }
            }
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
    });
}

observeDOMChanges();
