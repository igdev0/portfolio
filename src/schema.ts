import {co} from 'jazz-tools';

export const JazzRoot = co.map({});

export const Account = co.account({
  root: JazzRoot,
  profile: co.profile(),
})