import React from "react";
import playstore from "@images/playstore.svg";
import credit from "@images/credit.svg";
import styles from "./footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.firstColumn}>
        <p className="title">Company</p>
        <a href="/blog" title="Health Articles">
          Health Article
        </a>
        <a href="/all-medicine-list" title="All Medicines">
          All Medicines
        </a>
        <a href="/help" title="Need Help">
          Need Help
        </a>
        <a href="/help" title="FAQ">
          FAQ
        </a>
      </div>
      <div className={styles.singleCol}>
        <div className={styles.singleColFirst}>
          <p className="title">Social</p>
          <div className={styles.socialWrapper}>
            <a
              href="https://www.facebook.com/truemedsindia"
              target="_blank"
              rel="noreferrer"
            >
              <figure>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
                </svg>
              </figure>
            </a>
            <a
              href="https://www.youtube.com/channel/UCkkDCdWIciQfdcQ7p-7P8tA"
              target="_blank"
              rel="noreferrer"
            >
              <figure>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"></path>
                </svg>
              </figure>
            </a>
            <a
              href="http://linkedin.com/company/truemeds-india"
              target="_blank"
              rel="noreferrer"
            >
              <figure>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                </svg>
              </figure>
            </a>
          </div>
        </div>
        <div className={styles.singleColSecond}>
          <p className="title">Legal</p>
          <a href="/option/legals/tnc">Terms &amp; Conditions</a>
          <a href="/option/legals/policy">Privacy Policy</a>
        </div>
      </div>
      <div className={styles.downloadTruemeds}>
        <p className="title">Download Truemeds</p>
        <p className="description downloadApp">
          <span>Manage your health with ease Download Truemeds today!</span>Get
          easy access to prescription refills, health information, and more.
          With our app, you'll never have to wait in line again. Download now
          and start taking control of your health.
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.intellihealth.truemeds"
          target="_blank"
          rel="noreferrer"
        >
          <figure className="playstoreImg">
            <Image src={playstore} alt="playstore" />
          </figure>
        </a>
      </div>
      <div className={styles.contactUs}>
        <p className="title">Contact Us</p>
        <p className="description">
          Our customer representative team is available 7 days a week from 9 am
          - 9 pm.
        </p>
        <div className="spanDiv">
          <a href="mailto:support@truemeds.in">support@truemeds.in</a>
          <a href="tel:08069808861">08069808861</a>
        </div>
      </div>
      <div className={styles.creditSection}>
        <div className={styles.copyContainer}>
          <div className={styles.copyrightWrapper}>
            <Image src={credit} alt="copyright" />
            2023 - Truemeds | All rights reserved
          </div>
          {/* <div className="paymentWrapper">
            <p>Our Payment Partners</p>
            <figure>
              <div>
                <img
                  src="/static/media/VISA-Logo-2006.f4680050.svg"
                  alt="paymentPartner"
                />
                <img
                  src="/static/media/Maestro_logo.d7aa3200.svg"
                  alt="paymentPartner"
                />
                <img
                  src="/static/media/masterCard_logo.4092cd4c.svg"
                  alt="paymentPartner"
                />
                <img
                  src="/static/media/American-Express-logo.cfe93a5d.svg"
                  alt="paymentPartner"
                />
                <img
                  src="/static/media/UPI-Logo-vector.9f1ead5d.svg"
                  alt="paymentPartner"
                />
              </div>
              <div>
                <img
                  src="/static/media/Paytm_logo.34df87da.svg"
                  alt="paymentPartner"
                />
                <img
                  src="data:image/png;base64,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"
                  alt="paymentPartner"
                />
                <img
                  src="/static/media/netbanking-wh.a2b0c5f2.svg"
                  alt="paymentPartner"
                />
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYEAAAByCAYAAAC1KG0nAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA9jSURBVHgB7d37daRGFgbwz3v2/+0MujYCzUYAjkCTAXIEWkeAHYHGEaCJQHYEyBFoHAHtCCRHMNt3gdP05VIPutXQ4+93Tp2Z7oaiXlRB8RBARERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERpvsNpsn34uA9uHz6Aht668GUfnvfhNxARfSOk86/34StDdGj2odyHLYiIrph0ZGvubK9hMLgFEdEKpE4H3e/Dp4nfdiDNeX77aR9+BhHRlXCwj2plYNiALFIucs2kgn1WUICI6ErojkwGgC0olkwBSZkNy/AVLEMiuhK6A+O8djqHtuMflmMFIqKVcxgfwdI8GcbTQpxOI6JF/DPwu0xV5Bh3UnL/e4m/NymDXRf+SFjvd7TPDeSD7+TawC8gIloB6fClg3/Bem6rvIbbPivEz+/fg1NCRLRCNxjP/TOkDQYFwj6o9WoQES1MLvTqi5YM80IJP4fx4EFEdHH9w2IO7fSPnvt/3odf9+FPtHPgdEzOnHK0zwJo8t3U+4Icjjv+3T78G0REC5EOaXhkKmcEBSiWg12GG8/yPBMgolXIMJ7OuAGlchhPp5WeZTkIEL0ftw8PaG+64DNNHjIdJIV0N/jucR9+AM2h360kr5H+j7Gcw/LTQTL452gvUvevAe9ve33GYRrwmsiZ1/3gs+RniVtvJR1yJt2X7QbHrxaXsv0d6+MQPwPwpQtLtBGH43Ra9dzg+N1dOdZZ5qugbwXNsV5brPs1C7Kz67Mqa0rIYbkzAen8a8Rd4JYDhDWXt+aw7BmW1HWFuLKV/W5tZStt42tikLZU4LJ0OnU967vvfGflhPEUxlqeXu2P6p5g37Yq6a67Zda0M+m0WmlzWKaz0s8nxARJ27VMDzosU65i7u3VJdYjQ3r6lzhgCA0C0nfofq0ATdKVuTSH+KMpfUSSYXnSINc4CJQId/ZTv8kOdQ0DgcPly7Xfru/2al/ZrmkgyDB/EOjzucX7Cw0CwqHtE+Qg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"
                  alt="paymentPartner"
                />
              </div>
            </figure>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
