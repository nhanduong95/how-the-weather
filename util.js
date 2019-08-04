import { APP_CONST } from './const';

export const parseResp = resp => {
  if (resp.status === 200) {
    return { data: resp.data };
  } else {
    return { err: resp.message || APP_CONST.ERR_NOTI};
  }
}