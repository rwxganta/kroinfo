export default function DateTimeInfo() {
    //const WEEK_DAYS = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
    const WEEK_DAYS = [];
    const TODAY = new Date().toLocaleString(window.navigator.language, { weekday: 'short' }).substring(0, 3);

    for (let i = 1; i <= 7; ++i) {
        const day = 
            new Date(1970, 1, 1 + i)
            .toLocaleString(window.navigator.language, { weekday: 'short' })
            .substring(0, 3)
        WEEK_DAYS.push(day);
    }

    return (
        <>
            <aside>
                <ul className='weekDays'>
                    {/*<li>Seg</li>
                    <li>Ter</li>
                    <li>Qua</li>
                    <li className='today'>Qui</li>
                    <li>Sex</li>
                    <li>Sáb</li>
                    <li>Dom</li>*/}
                    {WEEK_DAYS.map((day, idx) => {
                        return day === TODAY ?
                            <li key={idx} className='today'>{day}</li> :
                            <li key={idx} >{day}</li>
                    })}
                </ul>
            </aside>
        </>
    )
}