"use strict";
(function() {
    const musicData = {
        happy: { artist: "Mozart", title: "Eine kleine Nachtmusik", description: "밝고 경쾌한 세레나데.", image: "images/mozart.jpg", link: "https://www.youtube.com/watch?v=Qb_jQBgzU-I" },
        sad: { artist: "Albinoni", title: "Adagio in G Minor", description: "잔잔하고 애절한 선율.", image: "images/albinoni.jpg", link: "https://www.youtube.com/watch?v=XMbvcp480Y4" },
        tired: { artist: "Debussy", title: "Clair de Lune", description: "몽환적이고 차분한 밤의 곡.", image: "images/debussy.jpg", link: "https://www.youtube.com/watch?v=CvFH_6DNRCY" },
        angry: { artist: "Beethoven", title: "Symphony No.5", description: "강렬한 에너지가 느껴지는 곡.", image: "images/beethoven.jpg", link: "https://www.youtube.com/watch?v=fOk8Tm815lE" },
        sleepy: { artist: "Chopin", title: "Nocturne Op.9 No.2", description: "부드럽고 따뜻한 밤의 선율.", image: "images/chopin.jpeg", link: "https://www.youtube.com/watch?v=9E6b3swbnWg" },
        sunny: { artist: "Vivaldi", title: "Spring", description: "생동감 넘치는 봄날의 곡.", image: "images/vivaldi.jpg", link: "https://www.youtube.com/watch?v=6LAPFM3dgag" },
        cloudy: { artist: "Dvořák", title: "Serenade for Strings", description: "흐린 날씨와 어울리는 따뜻한 곡.", image: "images/dvorak.jpg", link: "https://youtu.be/bRrP3ESM6sQ?si=5ik8Agedit9579X8" },
        rainy: { artist: "Chopin", title: "Raindrop Prelude", description: "비 오는 날에 듣기 좋은 곡.", image: "images/chopin.jpeg", link: "https://youtu.be/6OFHXmiZP38?si=NQnmqAOLuoLzWveZ" },
        thunder: { artist: "Pavarotti", title: "Nessun Dorma", description: "강렬한 감정을 느끼게 하는 아리아.", image: "images/pavarotti.jpg", link: "https://youtu.be/cWc7vYjgnTs?si=5-ph5GK3-l6VVrpE" },
        snowy: { artist: "Tchaikovsky", title: "Waltz of the Snowflakes", description: "눈 오는 날의 환상적인 분위기.", image: "images/tchaikovsky.jpg", link: "https://youtu.be/GS_gumNLHhM?si=7JX4bvFhI0ChPFg-" }
    };

    window.addEventListener("load", init);

    function init() {
        id("feeling").addEventListener("click", () => switchMode("feeling"));
        id("weather").addEventListener("click", () => switchMode("weather"));
        id("submit-feeling").addEventListener("click", submitFeeling);
        id("submit-weather").addEventListener("click", submitWeather);
        id("retry").addEventListener("click", resetPage);
        currentTime();
    }

    function switchMode(mode) {
        id("choice-page").classList.remove("hidden");
        id("choice-feeling").classList.add("hidden");
        id("choice-weather").classList.add("hidden");

        if (mode === "feeling") {
            id("choice-feeling").classList.remove("hidden");

        } else {
            id("choice-weather").classList.remove("hidden");

        }
    }

    function submitFeeling() {
        const selected = qs('input[name="feeling"]:checked');
        if (!selected) {
            alert("감정을 선택해주세요!");
            return;
        }
        renderMusic(selected.value);
    }

    function submitWeather() {
        const selected = qs('input[name="weather"]:checked');
        if (!selected) {
            alert("날씨를 선택해주세요!");
            return;
        }
        renderMusic(selected.value);
    }

    /* 다 끝나면 자도응로 초기화되도록 */
    function resetPage() {
        id("choice-page").classList.add("hidden");
        id("choice-feeling").classList.add("hidden");
        id("choice-weather").classList.add("hidden");
        id("music-info").classList.add("hidden");

        let radios = qsa('input[type="radio"]');
        radios.forEach(radio => {
            radio.checked = false;
        })
    }

    function renderMusic(key) {
        let container = getContainer();
        const data = musicData[key];

        if (!data) {
            alert("음악 정보를 찾을 수 없습니다.");
            return;
        }
        container.querySelector("img").src = data.image;
        container.querySelector("img").alt = data.artist;
        container.querySelector(".music-title").textContent = data.title;
        container.querySelector(".artist").textContent = data.artist;
        container.querySelector("p").textContent = data.description;
        container.querySelector("a").href = data.link;

        id("music-info").classList.remove("hidden");
        id("choice-page").classList.add("hidden");
    }

    function getContainer() {
        return document.querySelector(".music-container")
    }

    function currentTime() {
        const now = new Date();
        id("current-time").textContent = now.toLocaleString("ko-KR");
        setInterval(currentTime, 1000);
    }



    /* Helper Function - js template 참고 */
    /**
     * Returns the element that has the ID attribute with the specified value.
     * @param {string} name - element ID.
     * @returns {object} - DOM object associated with id.
     */
    function id(name) {
        return document.getElementById(name);
    }

    /**
     * Returns the first element that matches the given CSS selector.
     * @param {string} query - CSS query selector.
     * @returns {object} - The first DOM object matching the query.
     */
    function qs(query) {
        return document.querySelector(query);
    }

    /**
     * Returns an array of elements matching the given query.
     * @param {string} query - CSS query selector.
     * @returns {array} - Array of DOM objects matching the given query.
     */
    function qsa(query) {
        return document.querySelectorAll(query);
    }
})();


    /* Helper Function 사용. 교수님 강의자료 제공 */
    /**
     * Returns the element that has the ID attribute with the specified value.
     * @param {string} name - element ID.
     * @returns {object} - DOM object associated with id.
     */

    /*
    function id(name) {
        return document.getElementById(name);
    }

     */

    /**
     * Returns the first element that matches the given CSS selector.
     * @param {string} query - CSS query selector.
     * @returns {object} - The first DOM object matching the query.
     */
    /*
    function qs(query) {
        return document.querySelector(query);
    }
})
*/
