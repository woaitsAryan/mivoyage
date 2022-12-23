import styles from "./SignInPhone.module.css";

const SignInPhone = () => {
  return (
    <div className={styles.signInPhone}>
      <form className={styles.content} method="post" id="sign-in">
        <div className={styles.header} />
        <div className={styles.text}>Create your account</div>
        <div className={styles.text1}>
          Sit back and relax, we'll take it from here
        </div>
        <form className={styles.content1} method="post" id="sign-in">
          <div className={styles.form}>
            <input
              className={styles.formItem}
              type="text"
              defaultValue="Enter your name"
              placeholder="Name"
            />
            <div className={styles.formItem1}>
              <div className={styles.label}>
                <div className={styles.title}>
                  <div className={styles.text2}>Email</div>
                </div>
                <div className={styles.title}>
                  <div className={styles.text3}>*</div>
                </div>
              </div>
              <input
                className={styles.input}
                type="email"
                defaultValue="email"
                placeholder="Enter your name"
                required
                autoFocus
              />
            </div>
            <div className={styles.formItem2}>
              <div className={styles.label}>
                <div className={styles.title}>
                  <div className={styles.text2}>Password</div>
                </div>
                <div className={styles.title}>
                  <div className={styles.text3}>*</div>
                </div>
              </div>
              <input
                className={styles.password}
                type="password"
                defaultValue="password"
                placeholder="Password"
                minLength={8}
                required
                autoFocus
              />
            </div>
          </div>
          <div className={styles.actions}>
            <button className={styles.button}>
              <div className={styles.icon}>
                <div className={styles.widthChangeSizeHere}>
                  <div className={styles.ignore} />
                  <div className={styles.ignore} />
                </div>
                <div className={styles.iconWrapperH}>
                  <div className={styles.heightChangeSizeHere}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                  <img
                    className={styles.iconWrapper}
                    alt=""
                    src="../iconwrapper5.svg"
                  />
                </div>
              </div>
              <div className={styles.title}>
                <div className={styles.text7}>Get started</div>
              </div>
              <div className={styles.icon}>
                <div className={styles.widthChangeSizeHere}>
                  <div className={styles.ignore} />
                  <div className={styles.ignore} />
                </div>
                <div className={styles.iconWrapperH}>
                  <div className={styles.heightChangeSizeHere}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                  <img
                    className={styles.iconWrapper}
                    alt=""
                    src="../iconwrapper6.svg"
                  />
                </div>
              </div>
            </button>
            <button className={styles.buttonmediumprimarytruenor}>
              <div className={styles.icon1}>
                <div className={styles.widthChangeSizeHere}>
                  <div className={styles.ignore} />
                  <div className={styles.ignore} />
                </div>
                <div className={styles.iconWrapperH}>
                  <div className={styles.heightChangeSizeHere}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                  <img
                    className={styles.iconWrapper}
                    alt=""
                    src="../iconwrapper7.svg"
                  />
                </div>
              </div>
              <div className={styles.text8}>
                <div className={styles.text9}>Sign up with Google</div>
              </div>
            </button>
          </div>
        </form>
        <div className={styles.row}>
          <div className={styles.title}>
            <div className={styles.text10}>Already have an account?</div>
          </div>
          <div className={styles.title}>
            <div className={styles.text11}>Log in</div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInPhone;
