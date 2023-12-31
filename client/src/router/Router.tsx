import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainFeed } from '../pages/FeedPage/MainFeed';
import { PerfumeFeed } from '../pages/FeedPage/PerfumeFeed';
import SearchTabPage from '../pages/SearchPage/SearchTabPage';
import SearchMyPerfume from '../pages/SearchPage/SearchMyPerfume';
import PerfumeDetail from '../pages/PerfumePage/PerfumeDetail';
import { MyDrawerPage } from '../pages/DrawerPage/MyDrawerPage';
import FollowList from '../pages/MyPage/FollowList';
import Post from '../pages/PostPages/Post';
import PostDetail from '../pages/PostDetailPage/PostDetail';
import Mypage from '../pages/MyPage/Mypage';
import MainPage from '../pages/MainPage/MainPage';
import ProfileUpdate from '../pages/MyPage/ProfileUpdate';
import LoginPage from '../pages/LoginPage/LoginPage';
import KakaoAuthHandle from '../pages/LoginPage/KakaoAuthHandler';
import PrivateRoute from './PrivateRoute';
import PostUpdate from '../pages/PostPages/PostUpdate';
import { OtherProfilePage } from '../pages/ProfilePage/OtherProfilePage';
import PageNotFound from '../pages/PageNotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/oauth/kakao/callback" element={<KakaoAuthHandle />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/main-feed" element={<MainFeed />}></Route>
          <Route path="/perfume-feed/:id" element={<PerfumeFeed />}></Route>
          <Route path="/search" element={<SearchTabPage />}></Route>
          <Route path="/search-myperfume" element={<SearchMyPerfume />}></Route>
          <Route path="/post" element={<Post />}></Route>
          <Route path="/mypage" element={<Mypage />}></Route>
          <Route
            path="/profile-page/:id"
            element={<OtherProfilePage />}
          ></Route>
          <Route path="/post-detail/:id" element={<PostDetail />}></Route>
          <Route path="/perfume-detail/:id" element={<PerfumeDetail />}></Route>
          <Route path="/my-drawer" element={<MyDrawerPage />}></Route>
          <Route path="/follow-list/:id" element={<FollowList />}></Route>
          <Route path="/profile-update" element={<ProfileUpdate />}></Route>
          <Route path="/post-update/:id" element={<PostUpdate />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
