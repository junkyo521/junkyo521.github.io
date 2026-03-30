// 미적분학 페이지에서 사용할 장별 데이터를 객체로 정리합니다.
const chapterData = {
    "chapter-1": {
        number: "Chapter 1",
        title: "함수",
        paragraphs: [
            "함수는 입력값이 정해졌을 때 그에 대응하는 출력값이 하나로 결정되는 규칙입니다. 미적분학에서는 함수를 식, 표, 그래프로 읽는 연습이 가장 기본이 됩니다.",
            "먼저 함수의 정의역과 치역, 그리고 그래프가 어떻게 움직이는지 익히면 다음 장의 극한 개념도 더 쉽게 이해할 수 있습니다."
        ]
    },
    "chapter-2": {
        number: "Chapter 2",
        title: "함수와 극한",
        paragraphs: [
            "함수와 극한: 변수 x가 특정 값에 가까워질 때 함숫값이 어디로 향하는지 살펴보는 개념입니다.",
            "극한은 함수가 특정 지점 근처에서 어떤 값을 향하는지 이해하는 핵심 도구이며, 이후 미분과 적분을 배우는 바탕이 됩니다."
        ]
    }
};

const tocButtons = document.querySelectorAll(".toc-button");
const chapterContent = document.getElementById("chapter-content");

// 선택한 장의 내용을 오른쪽 본문 영역에 다시 그립니다.
function renderChapter(chapterKey) {
    if (!chapterContent || !chapterData[chapterKey]) {
        return;
    }

    const chapter = chapterData[chapterKey];

    chapterContent.classList.add("is-changing");

    window.setTimeout(() => {
        const paragraphHtml = chapter.paragraphs
            .map((paragraph) => `<p>${paragraph}</p>`)
            .join("");

        chapterContent.innerHTML = `
            <p class="chapter-number">${chapter.number}</p>
            <h2>${chapter.title}</h2>
            ${paragraphHtml}
        `;

        chapterContent.classList.remove("is-changing");
        chapterContent.classList.add("is-visible");
    }, 140);

    tocButtons.forEach((button) => {
        button.classList.toggle("is-active", button.dataset.chapter === chapterKey);
    });
}

// 목차 버튼을 누르면 페이지 전체를 다시 불러오지 않고 본문만 바꿉니다.
tocButtons.forEach((button) => {
    button.addEventListener("click", () => {
        renderChapter(button.dataset.chapter);
    });
});