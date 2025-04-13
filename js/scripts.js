document.addEventListener("DOMContentLoaded", function () {
  // サンプルデータ
  const portfolioItems = [
    {
      id: 1,
      title: "BattleFlow",
      description:
        "日本最大のMCバトル情報プラットフォーム。UMB、フリースタイルダンジョン、高校生ラップ選手権などの情報を提供し、MC一覧、バトル動画、ファン投票によるランキング機能を備えています。",
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "web",
      url: "https://battleflow.vercel.app/",
    },
    {
      id: 2,
      title: "ポケモン図鑑",
      description:
        "ポケモンのデータベースを提供するウェブアプリケーション。各ポケモンの詳細情報、タイプ、能力値などを検索・閲覧できます。",
      image:
        "https://images.unsplash.com/photo-1542779283-429940ce8336?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "app",
      url: "https://my-pokedex-frontend.vercel.app/",
    },
    {
      id: 3,
      title: "アクアマリン沖縄",
      description:
        "沖縄のマリンアクティビティを提供する会社のランディングページ。フライボード、パラセーリング、バナナボートなどのアクティビティ予約サービスを紹介しています。",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "web",
      url: "https://sample-lp4.vercel.app/",
    },
    {
      id: 4,
      title: "StudyFlow",
      description:
        "AIを活用して学習計画を自動生成するウェブアプリ。ユーザーの目標と期限に合わせて毎日の学習タスクを提案し、進捗に応じて自動調整する機能を備えています。",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      category: "app",
      url: "https://studyflow-woad.vercel.app/",
    },
  ];

  // トグル機能の初期化
  initToggles();

  // ポートフォリオアイテムの表示
  function displayPortfolioItems(items = portfolioItems) {
    const portfolioContainer = document.getElementById("portfolio-items");
    portfolioContainer.innerHTML = "";

    // フィルターボタンを追加
    if (!document.querySelector(".filter-buttons")) {
      const filterContainer = document.createElement("div");
      filterContainer.className = "filter-buttons";

      const filters = [
        { value: "all", label: "すべて" },
        { value: "web", label: "ウェブサイト" },
        { value: "app", label: "アプリケーション" },
        { value: "graphic", label: "グラフィックデザイン" },
        { value: "other", label: "その他" },
      ];

      filters.forEach((filter) => {
        const button = document.createElement("button");
        button.className =
          "filter-button" + (filter.value === "all" ? " active" : "");
        button.dataset.filter = filter.value;
        button.textContent = filter.label;

        button.addEventListener("click", function () {
          document
            .querySelectorAll(".filter-button")
            .forEach((btn) => btn.classList.remove("active"));
          this.classList.add("active");

          if (filter.value === "all") {
            displayPortfolioItems();
          } else {
            const filteredItems = portfolioItems.filter(
              (item) => item.category === filter.value
            );
            displayPortfolioItems(filteredItems);
          }
        });

        filterContainer.appendChild(button);
      });

      portfolioContainer.parentNode.insertBefore(
        filterContainer,
        portfolioContainer
      );
    }

    // アイテムがない場合のメッセージ
    if (items.length === 0) {
      const emptyMessage = document.createElement("div");
      emptyMessage.className = "column is-12";
      emptyMessage.innerHTML = `
                <div class="notification is-warning has-text-centered">
                    <p class="is-size-5">表示できる作品がありません。フィルターを変更してみてください。</p>
                </div>
            `;
      portfolioContainer.appendChild(emptyMessage);
      return;
    }

    // アイテムを表示
    items.forEach((item, index) => {
      const delay = index * 0.1;
      const column = document.createElement("div");
      column.className =
        "column is-4-desktop is-6-tablet portfolio-item fade-in";
      column.style.animationDelay = `${delay}s`;

      // URLがあれば、クリック可能なスタイルを追加
      const cardClass = item.url ? "card is-clickable" : "card";

      column.innerHTML = `
                <div class="${cardClass}">
                    <div class="card-image">
                        <figure class="image">
                            <img src="${item.image}" alt="${item.title}">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="content">
                            <h3 class="title is-4">${item.title}</h3>
                            <p>${item.description}</p>
                        </div>
                        <div class="tags">
                            <span class="tag is-${
                              item.category
                            }">${getCategoryLabel(item.category)}</span>
                        </div>
                    </div>
                </div>
            `;

      portfolioContainer.appendChild(column);

      // URLがある場合、クリックイベントを追加
      if (item.url) {
        const card = column.querySelector(".card");
        card.style.cursor = "pointer";
        card.addEventListener("click", function () {
          window.open(item.url, "_blank");
        });
      }
    });
  }

  // カテゴリ名を日本語に変換
  function getCategoryLabel(category) {
    const categories = {
      web: "ウェブサイト",
      app: "アプリケーション",
      graphic: "グラフィックデザイン",
      other: "その他",
    };
    return categories[category] || category;
  }

  // トグル機能の初期化
  function initToggles() {
    const toggleContainers = document.querySelectorAll(".toggle-container");

    toggleContainers.forEach((container) => {
      const header = container.querySelector(".toggle-header");

      header.addEventListener("click", () => {
        container.classList.toggle("active");
      });
    });
  }

  // 初期表示
  displayPortfolioItems();
});
