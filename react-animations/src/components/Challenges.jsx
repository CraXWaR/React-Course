import {useContext, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';

import {ChallengesContext} from '../store/challenges-context.jsx';
import ChallengeItem from './ChallengeItem.jsx';
import ChallengeTabs from './ChallengeTabs.jsx';

export default function Challenges() {
    const {challenges} = useContext(ChallengesContext);
    const [selectedType, setSelectedType] = useState('active');
    const [expanded, setExpanded] = useState(null);

    function handleSelectType(newType) {
        setSelectedType(newType);
    }

    function handleViewDetails(id) {
        setExpanded((prevId) => {
            if (prevId === id) {
                return null;
            }

            return id;
        });
    }

    const filteredChallenges = {
        active: challenges.filter((challenge) => challenge.status === 'active'),
        completed: challenges.filter((challenge) => challenge.status === 'completed'),
        failed: challenges.filter((challenge) => challenge.status === 'failed'),
    };

    const displayedChallenges = filteredChallenges[selectedType];

    return (<div id="challenges">
        <ChallengeTabs
            challenges={filteredChallenges}
            onSelectType={handleSelectType}
            selectedType={selectedType}
        >
            <AnimatePresence>
                {displayedChallenges.length > 0 ? (<ol className="challenge-items">
                    {displayedChallenges.map((challenge) => (<motion.li
                        key={challenge.id}
                        exit={{opacity: 0, y: -20}}
                        transition={{duration: 0.3}}
                        initial={{opacity: 0, scale: 0.95, y: 10}}
                        animate={{opacity: 1, scale: 1, y: 0}}
                    >
                        <ChallengeItem
                            challenge={challenge}
                            onViewDetails={() => handleViewDetails(challenge.id)}
                            isExpanded={expanded === challenge.id}
                        />
                    </motion.li>))}
                </ol>) : (<motion.p
                    key="no-challenges"
                    initial={{opacity: 0, scale: 0.95, y: 10}}
                    animate={{opacity: 1, scale: 1, y: 0}}
                    exit={{opacity: 0, scale: 0.95, y: -10}}
                    transition={{duration: 0.4, ease: 'easeOut'}}
                >
                    No challenges found.
                </motion.p>)}
            </AnimatePresence>
        </ChallengeTabs>
    </div>);

}
