import styles from "./index.module.scss";

const FOOTER_MENU = [
  {
    id: 1,
    description: "개인 정보 보호 정책",
    href: "https://travel.rakuten.com/contents/kor/ko-kr/information/terms/privacy/",
  },
  {
    id: 2,
    description: "이용 약관",
    href: "https://travel.rakuten.com/contents/kor/ko-kr/information/terms/policy/",
  },
  {
    id: 3,
    description: "도움말/문의",
    href: "https://travel.faq.rakuten.net/ko-kr/s/",
  },
  {
    id: 4,
    description: "회사 개요",
    href: "https://travel.rakuten.com/contents/kor/ko-kr/information/corporate/",
  },
  {
    id: 5,
    description: "Cookie 정책",
    href: "https://travel.rakuten.com/contents/kor/ko-kr/information/terms/cookie/",
  },
  {
    id: 6,
    description: "개인 정보 비공개",
    href: "https://travel.rakuten.com/contents/kor/ko-kr/information/terms/privacy/#donotsell",
  },
  {
    id: 7,
    description: "설정",
    href: "",
  },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul className={styles.footer_menu}>
          {FOOTER_MENU.map((menu) => (
            <li key={menu.id} className={styles.footer_menu_list}>
              <a href={menu.href} type="_blank">
                {menu.description}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.company_info_wrapper}>
        <div>Social Media List</div>

        <p>© 라쿠텐 그룹 주식회사</p>
      </div>
    </footer>
  );
}

export default Footer;
