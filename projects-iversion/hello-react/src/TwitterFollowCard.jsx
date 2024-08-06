import { useState } from 'react';

export function TwitterFollowCard ({userName, name, initialIsFollowing}) {
    
    //isFollowing is the status, setIsFollowing is the way to change that status.
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    //This is like a JS if
    const text = isFollowing ? 'Following' : 'Follow'
    
    
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button' 
    

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    
    return(
    <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img className='tw-followCard-avatar' src={`https://unavatar.io/${userName}`} alt="Mateo de espaldas" />
            <div className='tw-followCard-userInfo'>
                <strong>{name}</strong>
                <span className='tw-followCard-userName'>@{userName}</span>
            </div>
        </header>

        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className='tw-followCard-text'>{text}</span>
                <span className='tw-followCard-unfollow'>Unfollow</span>
            </button>
        </aside>
    </article>
    )
}