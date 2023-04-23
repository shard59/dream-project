import classNames from 'shared/helpers/classNames/classNames';
import DynamicModuleLoader, { ReducerList } from 'shared/helpers/components/DynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import useAppDispatch from 'shared/helpers/hooks/useAppDispatch';

interface ProfilePageProps {
    className?: string;
}

const initialReducers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props;
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
