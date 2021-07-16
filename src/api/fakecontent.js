import { colors } from "../utils/colors";

export const infoContent = {
  title: (
    <span>
      <span style={{ color: colors.primaryPeach }}>Фото на </span>
      <br />
      праздник
    </span>
  ),
  text: (
    <span>
      Lorem ipsum dolor sit amet, consectetur{" "}
      <span style={{ color: colors.primaryPeach, textDecoration: "underline" }}>
        adipiscing elit
      </span>
      , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </span>
  ),
  bullets: [
    {
      title: (
        <span>
          Безлимитная <br />
          печать фото
        </span>
      ),
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 13.5C7.71679 13.5 3 18.2168 3 24C3 29.7891 7.71094 34.5 13.5 34.5C17.8945 34.5 20.5781 32.0859 22.6406 29.1094C22.0254 28.1191 21.5098 27.1406 21 26.2031C19.1602 29.2441 17.0977 31.5 13.5 31.5C9.36328 31.5 6 28.1367 6 24C6 19.8398 9.33985 16.5 13.5 16.5C15.9258 16.5 17.4668 17.3672 18.8906 18.8438C20.3145 20.3203 21.5156 22.4531 22.7344 24.7031C23.9531 26.9531 25.1895 29.3203 27 31.2188C28.8105 33.1172 31.3066 34.5 34.5 34.5C40.2832 34.5 45 29.7832 45 24C45 18.2109 40.2891 13.5 34.5 13.5C30.1289 13.5 27.4277 15.8379 25.3594 18.75C25.9746 19.7227 26.5371 20.6777 27.0469 21.6094C28.875 18.6563 30.9141 16.5 34.5 16.5C38.6367 16.5 42 19.8633 42 24C42 28.1602 38.6602 31.5 34.5 31.5C32.1152 31.5 30.6152 30.6328 29.2031 29.1563C27.791 27.6797 26.584 25.5469 25.3594 23.2969C24.1348 21.0469 22.875 18.6797 21.0469 16.7812C19.2188 14.8828 16.7227 13.5 13.5 13.5H13.5Z" />
        </svg>
      ),
    },
    {
      title: (
        <span>
          Фотореквизит <br />в наличии
        </span>
      ),
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.9313 32.3438C22.3135 31.7812 21.5734 31.5 20.7052 31.5C18.3735 31.5 17.2271 32.3086 16.2087 33.4336V33.4688C15.9372 33.7584 15.6132 34.1948 15.2392 34.6987C14.8925 35.1658 14.5027 35.6909 14.0717 36.2109C13.1868 37.2832 12.0293 38.3862 10.2429 38.8828C10.2318 38.885 10.2262 38.8927 10.2206 38.9004C10.2151 38.9081 10.2095 38.9158 10.1984 38.918C7.76088 39.6431 5.87989 39.1553 4.49976 38.2852C4.7001 38.606 4.91714 38.918 5.34565 39.1992C6.39188 39.8848 8.46209 40.5 12.2463 40.5C16.4313 40.5 20.9891 39.4453 22.8867 37.5117L23.9998 36.3516L25.1128 37.5117C27.0105 39.4453 31.5682 40.5 35.7532 40.5C39.5374 40.5 41.6076 39.8848 42.6539 39.1992C43.0824 38.918 43.2994 38.606 43.4998 38.2852C42.1196 39.1553 40.2386 39.6431 37.8011 38.918C37.7956 38.9158 37.7872 38.9169 37.7789 38.918C37.7705 38.9191 37.7622 38.9202 37.7566 38.918V38.8828C35.9702 38.3862 34.8127 37.2832 33.9278 36.2109C33.492 35.6851 33.097 35.1541 32.7467 34.6831C32.3768 34.1858 32.0567 33.7554 31.7909 33.4688V33.4336C30.7724 32.3086 29.6205 31.5 27.2943 31.5C26.4261 31.5 25.686 31.7769 25.0683 32.3438L23.9998 33.3633L22.9313 32.3438Z" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.650855 6.49159C1.43712 5.19779 2.88573 4.5 4.96156 4.5C7.85367 4.5 12.9795 5.28234 16.2999 5.78913C17.1141 5.91339 17.8197 6.02109 18.3573 6.09662C19.559 6.26549 20.3841 6.92824 20.9617 7.64416C21.4292 8.2237 21.7996 8.92764 22.0894 9.4783C22.1296 9.55479 22.1683 9.62832 22.2055 9.69815C22.9272 11.0534 23.298 11.4231 24 11.4231C24.7018 11.4231 25.0727 11.0534 25.7945 9.6976C25.8316 9.62782 25.8703 9.55436 25.9105 9.47794C26.2003 8.92713 26.5708 8.22297 27.0384 7.64334C27.6161 6.92735 28.4416 6.26469 29.6437 6.0965C30.1891 6.02018 30.9082 5.91053 31.7383 5.78394C35.0591 5.27753 40.1579 4.5 43.0385 4.5C45.1143 4.5 46.5629 5.19779 47.3492 6.49159C48.0045 7.56994 48.0015 8.80384 48.0001 9.38846C48.0001 9.41409 48 9.43847 48 9.46154C48 12.4832 46.3344 16.7994 43.743 20.3175C41.1534 23.833 37.3015 27 32.6539 27C30.7435 27 29.302 26.6944 28.1724 26.1465C27.0219 25.5886 26.3128 24.836 25.7974 24.1565C25.6262 23.9307 25.457 23.6854 25.3192 23.4855C25.2685 23.4119 25.2219 23.3444 25.1812 23.2864C25.0069 23.0384 24.8835 22.8818 24.7687 22.7678C24.6178 22.6181 24.4602 22.5 24 22.5C23.5399 22.5 23.3822 22.6181 23.2313 22.7678C23.1165 22.8818 22.9932 23.0384 22.8189 23.2864C22.7781 23.3444 22.7316 23.4119 22.6808 23.4855C22.543 23.6854 22.3739 23.9307 22.2026 24.1565C21.6872 24.836 20.9781 25.5886 19.8276 26.1465C18.698 26.6944 17.2566 27 15.3462 27C10.6985 27 6.84658 23.833 4.25706 20.3175C1.66561 16.7994 1.6202e-05 12.4832 1.6202e-05 9.46154C1.6202e-05 9.43847 -4.2449e-05 9.41409 -0.000103961 9.38846C-0.00150908 8.80383 -0.00447488 7.56994 0.650855 6.49159ZM3.21456 8.04961C3.03324 8.34797 3.00002 8.78363 3.00002 9.46154C3.00002 11.6322 4.31308 15.3352 6.67249 18.5383C9.03383 21.744 12.105 24 15.3462 24C16.9458 24 17.9084 23.7431 18.5186 23.4472C19.108 23.1614 19.4746 22.789 19.8124 22.3435C19.9408 22.1742 20.0461 22.0213 20.1672 21.8456C20.2275 21.7581 20.2916 21.6649 20.3645 21.5613C20.5608 21.2819 20.8078 20.9464 21.1181 20.6384C21.8175 19.9444 22.7294 19.5 24 19.5C25.2706 19.5 26.1826 19.9444 26.8819 20.6384C27.1922 20.9464 27.4392 21.2819 27.6355 21.5613C27.7084 21.6649 27.7726 21.7581 27.8328 21.8455C27.9539 22.0213 28.0592 22.1742 28.1876 22.3435C28.5255 22.789 28.8921 23.1614 29.4814 23.4472C30.0916 23.7431 31.0543 24 32.6539 24C35.8951 24 38.9662 21.744 41.3275 18.5383C43.687 15.3352 45 11.6322 45 9.46154C45 8.78363 44.9668 8.34798 44.7855 8.04961C44.7063 7.91942 44.4242 7.5 43.0385 7.5C40.4184 7.5 35.7166 8.21496 32.3808 8.72222C31.4867 8.85818 30.6908 8.97921 30.0593 9.06756C29.8327 9.09928 29.6338 9.20419 29.3732 9.52714C29.1022 9.86301 28.8785 10.2852 28.5669 10.8732C28.527 10.9485 28.4856 11.0265 28.4426 11.1074C27.7959 12.3221 26.6697 14.4231 24 14.4231C21.3305 14.4231 20.2043 12.323 19.5575 11.1081C19.5143 11.027 19.4729 10.9489 19.4329 10.8734C19.1215 10.2858 18.8977 9.8637 18.6267 9.52778C18.366 9.20461 18.1668 9.09934 17.9398 9.06744C17.3191 8.98022 16.5392 8.86152 15.6631 8.7282C12.3254 8.22024 7.59276 7.5 4.96156 7.5C3.57584 7.5 3.29368 7.91942 3.21456 8.04961ZM10.5153 13.7108C10.5812 14.2383 10.868 15.2594 11.5331 16.1906C12.2535 17.1991 13.3356 18 15 18C16.6415 18 17.3077 16.9676 17.3077 16.3846C17.3077 15.7547 16.8675 15.0576 15.7051 14.4309C14.5758 13.822 13.1214 13.5 12 13.5C11.1603 13.5 10.7165 13.6225 10.5153 13.7108ZM8.88452 11.1825C9.68319 10.7033 10.7441 10.5 12 10.5C13.5803 10.5 15.5298 10.928 17.1289 11.7903C18.695 12.6347 20.3077 14.13 20.3077 16.3846C20.3077 19.0324 17.8585 21 15 21C12.1645 21 10.2466 19.5509 9.09192 17.9344C7.98715 16.3877 7.50002 14.5866 7.50002 13.5C7.50002 12.5414 8.01479 11.7043 8.88452 11.1825ZM30.9288 11.7903C32.528 10.928 34.4774 10.5 36.0577 10.5C37.3137 10.5 38.3745 10.7033 39.1732 11.1825C40.0429 11.7043 40.5577 12.5414 40.5577 13.5C40.5577 14.5866 40.0706 16.3877 38.9658 17.9344C37.8112 19.5509 35.8932 21 33.0577 21C30.1992 21 27.75 19.0324 27.75 16.3846C27.75 14.13 29.3628 12.6347 30.9288 11.7903ZM32.3526 14.4309C31.1903 15.0576 30.75 15.7547 30.75 16.3846C30.75 16.9676 31.4162 18 33.0577 18C34.7222 18 35.8043 17.1991 36.5246 16.1906C37.1898 15.2594 37.4765 14.2383 37.5424 13.7108C37.3412 13.6225 36.8975 13.5 36.0577 13.5C34.9363 13.5 33.4819 13.822 32.3526 14.4309Z"
          />
          <rect x="-0.000244141" y="9.75" width="3" height="33.75" />
        </svg>
      ),
    },
    {
      title: (
        <span>
          Фотоотчет в <br />
          электронном виде
        </span>
      ),
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4.5 7.5V31.5H9.89063L9.75 33L11.25 33.1406L14.6719 33.5156L14.4375 34.8281L14.1563 36.2813L15.6094 36.5625L39.1875 41.0625L40.6406 41.3438L40.9219 39.8906L44.9531 19.1719L45.2813 17.7188L43.7813 17.4375L38.7188 16.4531L39 13.5L39.1406 12.0469L37.6875 11.8594L31.5 11.1094V7.50001L4.5 7.5ZM7.5 10.5H28.5V28.5H7.5V10.5ZM18 13.5C15.5332 13.5 13.5 15.5332 13.5 18C13.5 19.0078 13.8223 19.9629 14.3906 20.7188C12.9375 21.8145 12 23.5371 12 25.5H15C15 23.7129 16.2129 22.5 18 22.5C19.7871 22.5 21 23.7129 21 25.5H24C24 23.5371 23.0625 21.8145 21.6094 20.7188C22.1777 19.9629 22.5 19.0078 22.5 18C22.5 15.5332 20.4668 13.5 18 13.5ZM31.5 14.1094L35.8594 14.6719L34.0313 32.5313L24.4219 31.5H31.5V14.1094ZM18 16.5C18.8438 16.5 19.5 17.1562 19.5 18C19.5 18.8438 18.8438 19.5 18 19.5C17.1562 19.5 16.5 18.8438 16.5 18C16.5 17.1562 17.1562 16.5 18 16.5ZM38.3906 19.4531L41.7656 20.1094L38.25 37.8281L17.6719 33.8906V33.7969L35.25 35.6719L36.75 35.8594L36.8906 34.3594L38.3906 19.4531Z" />
        </svg>
      ),
    },
    {
      title: (
        <span>
          Цены <br />
          ниже рынка
        </span>
      ),
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M24 7.5L23.5312 7.92188L6.42187 25.2188L5.39062 26.25L6.42187 27.3281L20.6719 41.5781L21.75 42.6094L22.7812 41.5781L40.0781 24.4688L40.5 24V7.5H24ZM25.2656 10.5H37.5V22.7344L21.75 38.3906L9.60937 26.25L25.2656 10.5ZM33 13.5C32.1738 13.5 31.5 14.1738 31.5 15C31.5 15.8262 32.1738 16.5 33 16.5C33.8262 16.5 34.5 15.8262 34.5 15C34.5 14.1738 33.8262 13.5 33 13.5Z" />
        </svg>
      ),
    },
  ],
};


