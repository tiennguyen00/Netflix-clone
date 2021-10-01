import React, { useEffect, useState } from 'react';
import { SelectProfileContainer } from './profiles';
import { getAuth } from 'firebase/auth';
import { Loading } from '../components';

export function BrowseContainer({ slides }) {
  const auth = getAuth();
  const user = auth.currentUser || {};
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(profile);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    loading ? (
      <Loading src={user.photoURL} />
    ) : null
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
