/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./styles/footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <div>
          <h2>Tải ứng dụng Revelogue</h2>
          <div>
            <div>
              <p>
                <img
                  src="https://revelogue.com/wp-content/uploads/2021/07/onlink_to_d3hffx_small.png"
                  alt="qrcode"
                />
              </p>
            </div>
            <div>
              <a href="https://apps.apple.com/vn/app/revelogue/id1576630037">
                <img
                  src="https://revelogue.com/wp-content/uploads/2021/07/Appstore132x40.png"
                  alt="ios"
                />
              </a>
              <br/><br/>
              <a href="https://play.google.com/store/apps/details?id=com.ankii.revelogue">
                <img
                  src="https://revelogue.com/wp-content/uploads/2021/07/CHPlay132x40.png"
                  alt="android"
                />
              </a>
            </div>
          </div>
        </div>
        <div>
          <h2>Thông tin liên hệ</h2>
          <p>
            <small>
              Revelogue – Chuyên trang nghệ thuật cho người trẻ Việt
            </small>
          </p>
          <p>
            <small>E-mail: Shin.hallofdreamers@gmail.com</small>
          </p>
          <p>
            <small>© 2019-2021 Revelogue. All Rights Reserved.</small>
          </p>
          <p>
            <a href="https://www.dmca.com/Protection/Status.aspx?ID=9348c791-efe1-4bf3-9036-051208219904&refurl=https://revelogue.com/">
              <img
                src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=9348c791-efe1-4bf3-9036-051208219904"
                alt="dmca"
              />
            </a>
          </p>
        </div>
        <div>
          <h2>Chính sách và điều khoản</h2>
          <a href="#">Giới thiệu về Revelogue</a>
          <a href="#">Điều khoản sử dụng dịch vụ</a>
          <a href="#">Chính sách tuyển dụng Revelogue</a>
          <a href="#">Chính sách bảo mật (Policy Privacy)</a>
          <a href="#">Tuyên bố bản quyền trang (Copyright)</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
