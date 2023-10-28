import React from "react";
import photo from '../../assets/image/KROOS-_AV38698_OFICIAL_POSE_PRIMER_EQUIPO_550x650.png'
import styles from './Users.module.css'


const User = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

        let pages = [];
        for (let i=1; i<pagesCount; i++) {
            pages.push(i)
        }

        return  (
            <div>
                <div>
                    {pages.map(p => {
                        return <span onClick={() => {props.onPageChanged(p)}} className={props.currentPage === p && styles.selected}>{p}</span>
                    })}
                </div>
                {
                    props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : photo} />
                            </div>
                            <div>
                                {u.followed ? <button onClick={() => {props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => {props.follow(u.id) }}>Follow</button>}

                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>
                        </span>
                    </div>
                    )
                }
            </div>
        )
}



export default User;