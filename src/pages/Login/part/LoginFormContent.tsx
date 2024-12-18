import { Field, Form, useFormikContext } from 'formik';
import { Link } from 'react-router-dom';

import { LoginForm } from '@@pages/Login/types';
import { PAGES } from '@@router/constants';
import { pathGenerator } from '@@router/utils';

function LoginFormContent() {
  const { handleSubmit, isValid } = useFormikContext<LoginForm>();

  return (
    <Form onSubmit={handleSubmit}>
      <fieldset>
        <legend>로그인 영역</legend>
        <div className='input_wrap'>
          <div className='input_area' id='id'>
            <Field type='text' name='id' id='id' placeholder='아이디를 입력해주세요.' />
          </div>
          <div className='input_area' id='password'>
            <Field type='password' name='password' id='password' placeholder='비밀번호를 입력해주세요.' />
          </div>
        </div>

        <div className='btn_area'>
          <button type='submit' className='btn' disabled={!isValid}>
            로그인하기
          </button>
        </div>
        <div className='btn_area btn_sub'>
          <Link to={pathGenerator(PAGES.LOGIN) + '/find/id'} className='btn'>
            아이디 찾기
          </Link>
          <Link to={pathGenerator(PAGES.LOGIN) + '/find/password'} className='btn'>
            비밀번호 찾기
          </Link>
        </div>
      </fieldset>
    </Form>
  );
}

export default LoginFormContent;
