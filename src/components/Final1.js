const Match=({match})=>{
    return (
        <div className={`match`}>
            <p>
                {match.team1}{' '}
            </p>
            <p>
                {match.team2}{' '}
            </p>
            <p>
                {match.type}{' '}
            </p>
            <p>
                {match.name}{' '}
            </p>
            <p>
                 {match.start}{' '}
            </p>
            <p>
                {match.end}{' '}
            </p>
            <p>
                 {match.loc}{' '}
            </p>
            <p>
                {match.comments}{' '}
            </p>
        </div>
    )
}