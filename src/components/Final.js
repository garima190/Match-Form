import React from 'react';
import Final1 from './Final';

const Final = ({matches}) => {
  return (
    <>
    <div>
        <h1>Details</h1>
    </div>
    <div>
        {
             matches.map((match)=>(
                <Final1
                  key={match.id}
                  match={match}
                />
             ))
        }
    </div>
    </>
  )
}

export default Final