import React from 'react';
import styled from 'styled-components';
import { MdMenuBook } from 'react-icons/md';
import { FaRegPlayCircle, FaMouse, FaMusic } from 'react-icons/fa';
import { IoWallet } from 'react-icons/io5';
import trendPost, {
  lifePosts,
  entertainmentPosts,
  politicsPosts,
  musicSide,
  latestPosts,
} from './UtilsComponents/CommonTrend';
import Trend from './UtilsComponents/Trend';
import NoticePots from '../SideBars/NoticePots';
import LifeSide from '../SideBars/LifeSide';
import TrendX from './UtilsComponents/TrendX';
import Music from './UtilsComponents/SidePostPreview';
import Archieve from './UtilsComponents/Archieve';
import LatestArticles from './LatestArticles';
import LatestPostSide from '../SideBars/LatestPostSide';
import Header from '../Header';

function Home() {
  return (
    <>
      <Header />
      <Container className="flex column">
        <div className="trend-finance">
          <Trend trend={trendPost} showGenre />
          <NoticePots />
        </div>
        <div className="entertainment-post-genre">
          <TrendX
            trend={entertainmentPosts}
            icon={<FaRegPlayCircle />}
            genre="Entertainment"
          />
        </div>
        <div className="life-post-genre">
          <Trend
            trend={lifePosts}
            icon={<MdMenuBook />}
            genre="Life"
            showGenre
          />
          <LifeSide />
        </div>

        <div className="politics-post-genre">
          <TrendX trend={politicsPosts} icon={<IoWallet />} genre="Finance" />
        </div>

        <div className="tech-post-genre">
          <Trend trend={lifePosts} icon={<FaMouse />} genre="Tech" showGenre />
          <div className="music-side-post flex column">
            <Music
              title="Music"
              genre="Music"
              icon={<FaMusic />}
              trendArr={musicSide}
            />
            <Archieve />
          </div>
        </div>

        <div className="latest-aticles">
          <LatestArticles latestTrend={latestPosts} />
          <LatestPostSide />
        </div>
      </Container>
    </>
  );
}

export default Home;

const Container = styled.div`
  padding-top: 4rem;
  width: 95%;
  margin: 0 auto;
  gap: 6.5rem;

  .trend-finance,
  .life-post-genre,
  .tech-post-genre,
  .latest-aticles {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
  }

  .music-side-post {
    gap: 3rem;
  }

  @media screen and (max-width: 994px) {
    width: 90%;
    margin: 0 auto;
    .trend-finance,
    .life-post-genre,
    .tech-post-genre,
    .latest-aticles {
      grid-template-columns: 1fr;
      gap: 4rem;
    }
  }
`;
