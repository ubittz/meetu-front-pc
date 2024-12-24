import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Footer from '@@components/Footer';
import Header from '@@components/Header';
import Popup from '@@components/Popup';
import MyMeetingListItem from '@@pages/MyPage/parts/MyMeetingListItem';
import MyPageDashboard from '@@pages/MyPage/parts/MyPageDashboard';
import MyPageHeader from '@@pages/MyPage/parts/MyPageHeader';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';
import { useActionSubscribe } from '@@store/middlewares/actionMiddleware';
import { MEETING_FILTER_TYPE } from '@@stores/meeting/constants';
import { useMeetingMyList } from '@@stores/meeting/hooks';
import { deleteMeetingFailure, deleteMeetingRequest, deleteMeetingSuccess } from '@@stores/meeting/reducer';
import { MeetingByUserQuery } from '@@stores/meeting/types';
import { useQueryParams } from '@@utils/request/hooks';

const FILTER_ITEMS = [
  {
    title: '전체',
    value: '',
  },
  {
    title: '모임확정',
    value: MEETING_FILTER_TYPE.CONFIRMED_WAITING,
  },
  {
    title: '진행완료',
    value: MEETING_FILTER_TYPE.IN_PROGRESS,
  },
];

const initialQuery: MeetingByUserQuery = {
  page: 0,
};

function MyMeeting() {
  const dispatch = useDispatch();

  const [confirmVisible, setConfirmVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [deleteTargetId, setDeleteTargetId] = useState<string>();
  const [content, setContent] = useState<string>();

  const { query, updateQuery } = useQueryParams(initialQuery, {
    initialSearch: ({ page }) => page === undefined,
  });

  const { content: meetingList, page, mutate } = useMeetingMyList(query);

  const handleDeleteMeeting = (id: string) => {
    setDeleteTargetId(id);
    setConfirmVisible(true);
  };

  const handleConfirm = () => {
    if (deleteTargetId) {
      dispatch(deleteMeetingRequest(deleteTargetId));
    }
    setConfirmVisible(false);
  };

  useActionSubscribe({
    type: deleteMeetingSuccess.type,
    callback: () => {
      setContent('삭제가 완료되었습니다.');
      setVisible(true);
      mutate();
    },
  });

  useActionSubscribe({
    type: deleteMeetingFailure.type,
    callback: () => {
      setContent('모임 제거를 실패했습니다.');
      setVisible(true);
    },
  });

  return (
    <div id='wrap'>
      <Popup
        visible={confirmVisible}
        confirmTextRight='삭제'
        confirmTextLeft='취소'
        onConfirmRight={handleConfirm}
        onConfirmLeft={() => setConfirmVisible(false)}
        onCancel={() => setConfirmVisible(false)}
      >
        <span className='tw-block tw-text-center'>정말 삭제하시겠습니까?</span>
      </Popup>
      <Popup visible={visible} confirmTextRight='확인' onConfirmRight={() => setVisible(false)} onCancel={() => setVisible(false)}>
        <span className='tw-block tw-text-center'>{content}</span>
      </Popup>
      <Header />
      <main className='container'>
        <MyPageHeader activeTab='my-meeting' />
        <MyPageDashboard />

        {/* <!-- 호스트_내모임 시작 --> */}
        <section className='mypage_content'>
          <div className='mc_inner'>
            <h3 className='main_tit'>
              내 모임 (총 <strong>{page.total}</strong>개)
              <Link to={pathGenerator(PAGES.MEETING) + '/create'} className='btn form02'>
                모임 만들기
              </Link>
            </h3>

            <div className='list_sort'>
              <div className='sort_inner'>
                {FILTER_ITEMS.map(({ title, value }) => (
                  <button
                    type='button'
                    className={`btn ${(query.filterType ?? '') === value ? 'active' : ''}`}
                    onClick={() => updateQuery('filterType', value)}
                  >
                    {title}
                  </button>
                ))}
              </div>
            </div>

            <div className='list_wrap type_my'>
              <ul>
                {meetingList?.map((meeting) => (
                  <MyMeetingListItem key={meeting.meetingId} meeting={meeting} onDelete={handleDeleteMeeting} isShowButton />
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default MyMeeting;
