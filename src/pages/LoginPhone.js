import styles from "./LoginPhone.module.css";

const LoginPhone = () => {
  return (
    <div className={styles.loginPhone}>
      <form className={styles.content}>
        <div className={styles.login}>Log in to your account</div>
        <div className={styles.welcomeBack}>
          Welcome back! Please enter your details.
        </div>
        <div className={styles.content1}>
          <div className={styles.form}>
            <div className={styles.formItem}>
              <div className={styles.label}>
                <div className={styles.title}>
                  <div className={styles.text}>Email</div>
                </div>
                <div className={styles.lineHeight}>
                  <div className={styles.helpIconWithTooltip}>
                    <div className={styles.zeroHeight}>
                      <div className={styles.zeroPixel}>
                        <div className={styles.tooltip}>
                          <div className={styles.body}>
                            <div className={styles.textparagraph}>
                              <div className={styles.text1}>Tooltip text</div>
                              <div className={styles.minWidthChangeSizeHere}>
                                <div className={styles.ignore} />
                                <div className={styles.ignore} />
                              </div>
                            </div>
                          </div>
                          <div className={styles.arrowPositionScrubber}>
                            <img className={styles.arrowWrapperIcon} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.iconWrapper}>
                      <div className={styles.widthChangeSizeHere}>
                        <div className={styles.ignore} />
                        <div className={styles.ignore} />
                      </div>
                      <div className={styles.iconWrapperH}>
                        <div className={styles.heightChangeSizeHere}>
                          <div className={styles.ignore} />
                          <div className={styles.ignore} />
                        </div>
                        <img className={styles.iconWrapper1} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.required}>
                  <div className={styles.text2}>*</div>
                </div>
              </div>
              <form className={styles.input}>
                <div className={styles.inputBase}>
                  <div className={styles.placeholder}>
                    <div className={styles.inputPrefix}>
                      <div className={styles.iconWrapper}>
                        <div className={styles.widthChangeSizeHere}>
                          <div className={styles.ignore} />
                          <div className={styles.ignore} />
                        </div>
                        <div className={styles.iconWrapperH}>
                          <div className={styles.heightChangeSizeHere}>
                            <div className={styles.ignore} />
                            <div className={styles.ignore} />
                          </div>
                          <img className={styles.iconWrapper1} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className={styles.placeholder1}>Enter your email</div>
                  </div>
                  <div className={styles.spacer}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                  <div className={styles.inputPrefix}>
                    <div className={styles.iconWrapper}>
                      <div className={styles.widthChangeSizeHere}>
                        <div className={styles.ignore} />
                        <div className={styles.ignore} />
                      </div>
                      <div className={styles.iconWrapperH}>
                        <div className={styles.heightChangeSizeHere}>
                          <div className={styles.ignore} />
                          <div className={styles.ignore} />
                        </div>
                        <img className={styles.iconWrapper1} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className={styles.formText}>
                <div className={styles.text3}>
                  Form text lorem ipsum dolor sit amet
                </div>
              </div>
            </div>
            <div className={styles.formItem1}>
              <div className={styles.label}>
                <div className={styles.title}>
                  <div className={styles.text}>Password</div>
                </div>
                <div className={styles.lineHeight}>
                  <div className={styles.helpIconWithTooltip}>
                    <div className={styles.zeroHeight}>
                      <div className={styles.zeroPixel}>
                        <div className={styles.tooltip}>
                          <div className={styles.body}>
                            <div className={styles.textparagraph}>
                              <div className={styles.text1}>Tooltip text</div>
                              <div className={styles.minWidthChangeSizeHere}>
                                <div className={styles.ignore} />
                                <div className={styles.ignore} />
                              </div>
                            </div>
                          </div>
                          <div className={styles.arrowPositionScrubber}>
                            <img className={styles.arrowWrapperIcon} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.iconWrapper}>
                      <div className={styles.widthChangeSizeHere}>
                        <div className={styles.ignore} />
                        <div className={styles.ignore} />
                      </div>
                      <div className={styles.iconWrapperH}>
                        <div className={styles.heightChangeSizeHere}>
                          <div className={styles.ignore} />
                          <div className={styles.ignore} />
                        </div>
                        <img className={styles.iconWrapper1} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.required}>
                  <div className={styles.text2}>*</div>
                </div>
              </div>
              <input
                className={styles.password}
                type="text"
                placeholder="Password"
              />
              <div className={styles.formText}>
                <div className={styles.text3}>
                  Form text lorem ipsum dolor sit amet
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <input
              className={styles.componentscheckbox}
              type="checkbox"
              defaultChecked={true}
            />
            <div className={styles.title}>
              <div className={styles.text8}>Forgot password</div>
            </div>
          </div>
          <div className={styles.actions}>
            <button className={styles.button}>
              <div className={styles.icon}>
                <div className={styles.widthChangeSizeHere4}>
                  <div className={styles.ignore} />
                  <div className={styles.ignore} />
                </div>
                <div className={styles.iconWrapperH}>
                  <div className={styles.heightChangeSizeHere4}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                  <img className={styles.iconWrapper1} alt="" />
                </div>
              </div>
              <div className={styles.title}>
                <div className={styles.text10}>Sign in</div>
              </div>
              <div className={styles.icon}>
                <div className={styles.widthChangeSizeHere4}>
                  <div className={styles.ignore} />
                  <div className={styles.ignore} />
                </div>
                <div className={styles.iconWrapperH}>
                  <div className={styles.heightChangeSizeHere4}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                  <img className={styles.iconWrapper1} alt="" />
                </div>
              </div>
            </button>
            <button className={styles.buttonmediumprimarytruenor}>
              <div className={styles.iconWrapper}>
                <div className={styles.widthChangeSizeHere4}>
                  <div className={styles.ignore} />
                  <div className={styles.ignore} />
                </div>
                <div className={styles.iconWrapperH}>
                  <div className={styles.heightChangeSizeHere4}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                  <img className={styles.iconWrapper1} alt="" />
                </div>
              </div>
              <div className={styles.title}>
                <div className={styles.text12}>Sign in with Google</div>
              </div>
            </button>
          </div>
        </div>
        <div className={styles.row1}>
          <div className={styles.title}>
            <div className={styles.placeholder1}>Don’t have an account?</div>
          </div>
          <div className={styles.title}>
            <div className={styles.text8}>Sign up</div>
          </div>
        </div>
      </form>
      <form className={styles.content2} method="post" id="login">
        <div className={styles.login}>Log in to your account</div>
        <div className={styles.welcomeBack}>
          Welcome back! Please enter your details.
        </div>
        <form className={styles.content1} method="post" id="login">
          <div className={styles.form}>
            <div className={styles.formItem}>
              <div className={styles.label}>
                <div className={styles.title}>
                  <div className={styles.text}>Email</div>
                </div>
                <div className={styles.lineHeight}>
                  <div className={styles.helpIconWithTooltip}>
                    <div className={styles.zeroHeight}>
                      <div className={styles.zeroPixel}>
                        <div className={styles.tooltip}>
                          <div className={styles.body}>
                            <div className={styles.textparagraph}>
                              <div className={styles.text1}>Tooltip text</div>
                              <div className={styles.minWidthChangeSizeHere}>
                                <div className={styles.ignore} />
                                <div className={styles.ignore} />
                              </div>
                            </div>
                          </div>
                          <div className={styles.arrowPositionScrubber}>
                            <img
                              className={styles.arrowWrapperIcon}
                              alt=""
                              src="../arrowwrapper.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.iconWrapper}>
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
                          className={styles.iconWrapper1}
                          alt=""
                          src="../iconwrapper.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.required}>
                  <div className={styles.text2}>*</div>
                </div>
              </div>
              <input
                className={styles.input1}
                type="email"
                defaultValue="email"
                placeholder="Enter your email"
                required
                autoFocus
              />
              <div className={styles.formText}>
                <div className={styles.text3}>
                  Form text lorem ipsum dolor sit amet
                </div>
              </div>
            </div>
            <div className={styles.formItem1}>
              <div className={styles.label}>
                <div className={styles.title}>
                  <div className={styles.text}>Password</div>
                </div>
                <div className={styles.lineHeight}>
                  <div className={styles.helpIconWithTooltip}>
                    <div className={styles.zeroHeight}>
                      <div className={styles.zeroPixel}>
                        <div className={styles.tooltip}>
                          <div className={styles.body}>
                            <div className={styles.textparagraph}>
                              <div className={styles.text1}>Tooltip text</div>
                              <div className={styles.minWidthChangeSizeHere}>
                                <div className={styles.ignore} />
                                <div className={styles.ignore} />
                              </div>
                            </div>
                          </div>
                          <div className={styles.arrowPositionScrubber}>
                            <img
                              className={styles.arrowWrapperIcon}
                              alt=""
                              src="../arrowwrapper1.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.iconWrapper}>
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
                          className={styles.iconWrapper1}
                          alt=""
                          src="../iconwrapper1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.required}>
                  <div className={styles.text2}>*</div>
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
              <div className={styles.formText}>
                <div className={styles.text3}>
                  Form text lorem ipsum dolor sit amet
                </div>
              </div>
            </div>
          </div>
          <div className={styles.row}>
            <input
              className={styles.componentscheckbox}
              type="checkbox"
              defaultChecked={true}
            />
            <div className={styles.title}>
              <div className={styles.text8}>Forgot password</div>
            </div>
          </div>
          <div className={styles.actions}>
            <button className={styles.button}>
              <div className={styles.icon}>
                <div className={styles.widthChangeSizeHere4}>
                  <div className={styles.ignore} />
                  <div className={styles.ignore} />
                </div>
                <div className={styles.iconWrapperH}>
                  <div className={styles.heightChangeSizeHere4}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                  <img
                    className={styles.iconWrapper1}
                    alt=""
                    src="../iconwrapper2.svg"
                  />
                </div>
              </div>
              <div className={styles.title}>
                <div className={styles.text10}>Sign in</div>
              </div>
              <div className={styles.icon}>
                <div className={styles.widthChangeSizeHere4}>
                  <div className={styles.ignore} />
                  <div className={styles.ignore} />
                </div>
                <div className={styles.iconWrapperH}>
                  <div className={styles.heightChangeSizeHere4}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                  <img
                    className={styles.iconWrapper1}
                    alt=""
                    src="../iconwrapper3.svg"
                  />
                </div>
              </div>
            </button>
            <button className={styles.buttonmediumprimarytruenor}>
              <div className={styles.iconWrapper}>
                <div className={styles.widthChangeSizeHere4}>
                  <div className={styles.ignore} />
                  <div className={styles.ignore} />
                </div>
                <div className={styles.iconWrapperH}>
                  <div className={styles.heightChangeSizeHere4}>
                    <div className={styles.ignore} />
                    <div className={styles.ignore} />
                  </div>
                  <img
                    className={styles.iconWrapper1}
                    alt=""
                    src="../iconwrapper4.svg"
                  />
                </div>
              </div>
              <div className={styles.title}>
                <div className={styles.text12}>Sign in with Google</div>
              </div>
            </button>
          </div>
        </form>
        <div className={styles.row1}>
          <div className={styles.title}>
            <div className={styles.placeholder1}>Don’t have an account?</div>
          </div>
          <div className={styles.title}>
            <div className={styles.text8}>Sign up</div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginPhone;
