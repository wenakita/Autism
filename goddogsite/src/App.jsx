import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div
          className="row justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <div className="col-lg-6 col-md-8 col-sm-10 col-12">
            <div className="border border-secondary p-4 rounded-4 fader">
              <Card className="border border-secondary bg-transparent text-white p-3 rounded-4">
                <Card.Title>
                  <img
                    src="https://dd.dexscreener.com/ds-data/tokens/base/0xddf7d080c82b8048baae54e376a3406572429b4e.png?size=lg&key=18ea46"
                    alt=""
                    style={{ maxWidth: "100%" }}
                  />
                </Card.Title>
                <Card.Title className="main p-3">Goddog</Card.Title>
                <Card.Title className="sub-main p-3">
                  $goddog: Your omnichain adventure awaits at /goddog with
                  surprises. Explore and earn across multiple chains under the
                  same contract!
                </Card.Title>
                <Card.Body>
                  <div className="d-flex flex-wrap justify-content-center gap-3">
                    <a
                      href="https://warpcast.com/~/channel/goddog"
                      type="button"
                      target="_blank"
                      className="sub-sub-main d-flex align-items-center p-2 rounded-4 text-white"
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#4C00A4",
                        maxWidth: "45%",
                      }}
                    >
                      <img
                        src="../public/farcaster.png"
                        alt=""
                        style={{ maxWidth: "30%" }}
                        className="me-2"
                      />
                      <span>/goddog</span>
                    </a>
                    <a
                      href="https://app.uniswap.org/swap?outputCurrency=0xDDf7d080C82b8048BAAe54e376a3406572429b4e&chain=base"
                      type="button"
                      target="_blank"
                      className="sub-sub-main d-flex align-items-center p-2 rounded-4 text-white"
                      style={{
                        textDecoration: "none",
                        backgroundColor: "#4C00A4",
                        maxWidth: "45%",
                      }}
                    >
                      <img
                        src="https://www.svgrepo.com/show/364828/shopping-cart-simple-fill.svg"
                        alt=""
                        style={{ maxWidth: "30%" }}
                        className="me-2"
                      />
                      <span>buy now</span>
                    </a>
                  </div>
                  <div className="mt-4 p-2 d-flex flex-wrap justify-content-center gap-3 text-white">
                    <a
                      href="https://linktr.ee/goddog69"
                      target="_blank"
                      className="text-secondary"
                    >
                      Linktree
                    </a>
                    <a
                      href="https://warpcast.com/~/channel/goddog"
                      target="_blank"
                      className="text-secondary"
                    >
                      Warpcast
                    </a>
                    <a
                      href="https://t.me/goddogportal"
                      target="_blank"
                      className="text-secondary"
                    >
                      Telegram
                    </a>
                    <a
                      href="https://interchain.axelar.dev/base/0xDDf7d080C82b8048BAAe54e376a3406572429b4e"
                      target="_blank"
                      className="text-secondary"
                      style={{ maxWidth: "100%" }}
                    >
                      Interchain
                    </a>
                  </div>
                </Card.Body>
              </Card>
              <div className="d-flex justify-content-center mt-3 p-3">
                <a
                  href="https://interchain.axelar.dev/base/0xDDf7d080C82b8048BAAe54e376a3406572429b4e"
                  className="sub-sub-main"
                  style={{
                    maxWidth: "100%",
                    overflowWrap: "break-word",
                    wordWrap: "break-word",
                    hyphens: "auto",
                    wordBreak: "break-word",
                    textAlign: "center",
                  }}
                >
                  0xDDf7d080C82b8048BAAe54e376a3406572429b4e
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
