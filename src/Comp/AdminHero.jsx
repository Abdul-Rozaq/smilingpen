import React from 'react'
import AdminHeroLink from './AdminHeroLink';
import "../css/AdminHero.css";

const AdminHero = () => {
    return (
        <div className="adminHero">
            <AdminHeroLink title="Motivational Quotes" count="20" link="/admin/motivation" />

            <AdminHeroLink title="Love Quotes" count="20" link="/admin/love" />
            <AdminHeroLink title="World tour" count="20" link="/admin/tour" />
            <AdminHeroLink title="Fashion Exclusive" count="20" link="/admin/fashion" />
            <AdminHeroLink title="Fact wednesday" count="20" link="/admin/fact" />
            <AdminHeroLink title="Language session" count="20" link="/admin/language" />
            <AdminHeroLink title="Word of the day" count="20" link="/admin/word-of-the-day" />
        </div>
    )
}

export default AdminHero
