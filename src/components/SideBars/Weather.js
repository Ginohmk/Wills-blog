/* eslint-disable object-curly-newline */
import React from 'react';
import styled from 'styled-components';
import { AiOutlineCloud } from 'react-icons/ai';
import {
  WiCelsius,
  WiRaindrop,
  WiStrongWind,
  WiCloud,
  WiDegrees,
} from 'react-icons/wi';
import { TiLocation } from 'react-icons/ti';
import { FiChevronsUp, FiChevronsDown } from 'react-icons/fi';
import { FaMoneyBillAlt } from 'react-icons/fa';
import Finance from '../Home/UtilsComponents/SidePostPreview';
import { financeSide } from '../Home/UtilsComponents/CommonTrend';

function Weather() {
  return (
    <Container>
      <div className="cloud-info flex j-between">
        <div className="cloude-info-text  ">
          <h3>NEW YORK</h3>
          <p>Broken Cloud</p>
        </div>
        <TiLocation />
      </div>

      <div className="cloud-container flex j-between">
        <div className="cloud flex">
          <AiOutlineCloud className="left-cloud" />
          <AiOutlineCloud className="mid-weather-icon" />
          <AiOutlineCloud className="right-cloud" />
        </div>

        <div className="cloud-container-text flex">
          <h3>17.4</h3>
          <WiCelsius />
        </div>

        <div className="inc-dec flex column">
          <div className="cloud-inc">
            <FiChevronsUp />
            <p> 19.5 </p>
          </div>

          <div className="cloud-dec">
            <p>12.9</p>
            <FiChevronsDown />
          </div>
        </div>
      </div>
      <hr className="opacity" />

      <ul className=" brief flex j-between opacity">
        <li>
          <WiRaindrop />
          62 %
        </li>

        <li>
          <WiStrongWind />
          2.1 kmh
        </li>

        <li>
          <WiCloud />
          75 %
        </li>
      </ul>

      <ul className="days-degree flex j-between opacity">
        <li>
          <span>TUE</span>
          <div>
            <h3>27</h3>
            <WiDegrees className="degree" />
          </div>
        </li>

        <li>
          <span> WED </span>

          <div>
            <h3>23</h3>
            <WiDegrees className="degree" />
          </div>
        </li>

        <li>
          <span> THU </span>
          <div>
            <h3>26</h3>
            <WiDegrees className="degree" />
          </div>
        </li>

        <li>
          <span> FRI </span>
          <div>
            <h3>26</h3>
            <WiDegrees className="degree" />
          </div>
        </li>

        <li>
          <span> SAT </span>
          <div>
            <h3>30</h3>
            <WiDegrees className="degree" />
          </div>
        </li>
      </ul>

      <Finance
        title="Finance"
        icon={<FaMoneyBillAlt />}
        trendArr={financeSide}
      />
    </Container>
  );
}

export default Weather;

const Container = styled.div`
  position: relative;
  .cloud-info {
    align-items: center;
    .cloude-info-text {
      p {
        margin-top: -20px;
        opacity: 0.5;
      }
    }

    svg {
      font-size: 1.5rem;
      opacity: 0.7;
    }
  }

  .cloud-container {
    position: relative;
    align-items: center;

    .inc-dec {
      opacity: 0.5;
      .cloud-inc {
        svg {
          font-size: 1.5rem;
        }
        p {
          margin-top: -10px;
        }
      }

      .cloud-dec {
        svg {
          font-size: 1.5rem;
        }
        p {
          margin-bottom: -7px;
        }
      }
    }

    &-text {
      position: relative;
      margin-left: -50px;
      h3 {
        font-size: 2.7rem;
        margin-left: 2rem;
      }
      svg {
        font-size: 2.5rem;
        position: absolute;
        top: 35px;
        left: 6rem;
        opacity: 0.7;
      }
    }

    .cloud {
      .mid-weather-icon {
        font-size: 5.5rem;
      }

      .left-cloud {
        margin-right: -25px;
      }

      .right-cloud {
        margin-left: -25px;
      }

      svg {
        opacity: 0.7;
        font-size: 4rem;
        color: gray;
      }
    }
  }

  .brief {
    align-items: center;
    padding: 0 2rem;

    li {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 5px;
      svg {
        font-size: 1.5rem;
      }
    }
  }

  .days-degree {
    gap: 10px;
    margin-top: 30px;

    li {
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;

      div {
        display: flex;
        align-items: center;
        h3 {
          font-size: 1.5rem;
        }
        .degree {
          font-size: 3rem;
          margin-left: -15px;
        }
      }

      span {
        font-size: 1.2rem;
        margin-left: -25px;
        margin-bottom: -20px;
      }
    }
  }
  @media screen and (max-width: 393px) {
    .cloud-info {
      .cloude-info-text {
        h3 {
          font-size: 1.1rem;
        }
        p {
          font-size: 0.8rem;
        }
      }
    }
    .cloud-container {
      &-text {
        h3 {
          font-size: 1rem;
        }
        svg {
          font-size: 2rem;
          position: absolute;
          top: 0;
          left: 3rem;
        }
      }
    }

    .days-degree {
      li {
        div {
          h3 {
            font-size: 1rem;
          }
          .degree {
            font-size: 2rem;
          }
        }
        span {
          font-size: 1rem;
          margin-left: -15px;
        }
      }
    }
  }
`;
