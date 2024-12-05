document.addEventListener('DOMContentLoaded', function() {
    // Array of topics with corresponding Wikipedia links and categories
    const topics = [
        {
            text: "In today's fast-paced world, maintaining attention has become increasingly difficult.",
            link: "https://en.wikipedia.org/wiki/Attention",
            category: "Attention"
        },
        {
            text: "The constant barrage of notifications and information makes it hard to focus.",
            link: "https://en.wikipedia.org/wiki/Information_overload",
            category: "Focus"
        },
        {
            text: "Many people find themselves scrolling endlessly, seeking stimulation rather than engaging deeply.",
            link: "https://en.wikipedia.org/wiki/Scrolling",
            category: "Scrolling"
        },
        {
            text: "Distractions are everywhere, from social media to constant notifications.",
            link: "https://en.wikipedia.org/wiki/Distraction",
            category: "Distraction"
        },
        {
            text: "The design of many apps is intentionally distracting, keeping users engaged for longer.",
            link: "https://en.wikipedia.org/wiki/Design_pattern",
            category: "Design"
        },
        {
            text: "We often seek out distractions as a way to escape from reality.",
            link: "https://en.wikipedia.org/wiki/Escape",
            category: "Escape"
        },
        {
            text: "We are bombarded with information from multiple sources, leading to cognitive overload.",
            link: "https://en.wikipedia.org/wiki/Cognitive_overload",
            category: "Cognitive Load"
        },
        {
            text: "The sheer volume of content available can make it challenging to discern what is important.",
            link: "https://en.wikipedia.org/wiki/Information_overload",
            category: "Information"
        },
        {
            text: "Information overload can lead to anxiety and decision fatigue.",
            link: "https://en.wikipedia.org/wiki/Decision_fatigue",
            category: "Anxiety"
        },
        {
            text: "Dark patterns in design manipulate users into making choices they might not otherwise make.",
            link: "https://en.wikipedia.org/wiki/Dark_pattern",
            category: "Design"
        },
        {
            text: "These design tactics exploit our cognitive biases, making it easier to get distracted.",
            link: "https://en.wikipedia.org/wiki/Cognitive_bias",
            category: "Cognitive Bias"
        },
        {
            text: "Understanding dark patterns can help users navigate digital spaces more effectively.",
            link: "https://en.wikipedia.org/wiki/Dark_pattern",
            category: "Navigation"
        },
        {
            text: "Constant notifications, endless emails, or social media is calling out to us with the promise of quick moments of pleasure.",
            link: "https://en.wikipedia.org/wiki/Notification",
            category: "Notifications"
        },
        {
            text: "Our mind is interrupted by notifications such as messages from a WhatsApp group of friends, a calendar reminder, an urgent weather notification, or a pop-up ad that promises a deal we “can’t miss.”",
            link: "https://en.wikipedia.org/wiki/Notification",
            category: "Interruptions"
        },
        {
            text: "Even if we want to resist, distractions invade our thoughts, and without realizing it, they creep into our words, distort our ideas, and turn our message into a chaotic mix of intentions and fragments of unrelated thoughts.",
            link: "https://en.wikipedia.org/wiki/Distraction",
            category: "Distraction"
        },
        {
            text: "These supposed quick moments often end up taking much more of our time than anticipated.",
            link: "https://en.wikipedia.org/wiki/Time_management",
            category: "Time Management"
        },
        {
            text: "Each sound, vibration, or alert competes for our attention, pulling us away from what we were doing and turning simple tasks into a whirlwind of information and thoughts, ultimately leaving us with unfinished work.",
            link: "https://en.wikipedia.org/wiki/Attention",
            category: "Attention"
        },
        {
            text: "This is the challenge: to face this relentless flow of distractions while trying to maintain focus.",
            link: "https://en.wikipedia.org/wiki/Focus",
            category: "Focus"
        },
        {
            text: "Every mistake, every intrusive thought that slips into the text we’re writing, symbolizes how difficult it is to navigate this digital era.",
            link: "https://en.wikipedia.org/wiki/Digital_age",
            category: "Digital Age"
        },
        {
            text: "We are challenged to fight interruptions, filter the noise, and maintain clarity in what we want to convey.",
            link: "https://en.wikipedia.org/wiki/Clarity",
            category: "Clarity"
        },
        {
            text: "At the core of it all, one question arises: Are we still truly in control of our attention, or are we constantly at the mercy of a world that steals our focus?",
            link: "https://en.wikipedia.org/wiki/Attention",
            category: "Attention Control"
        },
        {
            text: "We must prove that we can regain control, even if every word we write becomes a battle against distraction.",
            link: "https://en.wikipedia.org/wiki/Distraction",
            category: "Distraction"
        }
    ];

    // Function to create notifications for each topic
    function createTopicNotifications() {
        const topicContainer = document.getElementById('topicNotifications');
        topics.forEach(topic => {
            const notificationDiv = document.createElement('div');
            notificationDiv.classList.add('notification', 'topic-notifications');
            notificationDiv.innerHTML = `
                <p>Hey, look what I found about: ${topic.text}</p>
                <button class="readMoreButton" data-link="${topic.link}">Read more</button>
            `;
            topicContainer.appendChild(notificationDiv);
        });
    }

    // Function to handle button clicks
    function handleButtonClick(event) {
        if (event.target.classList.contains('readMoreButton')) {
            const link = event.target.getAttribute('data-link');
            window.location.href = link; // Redirect to the selected topic's Wikipedia page
        }
    }

    // Function to show a random notification every minute
    function showRandomNotification() {
        const notifications = document.querySelectorAll('.notification');
        notifications.forEach(notification => {
            notification.classList.remove('active'); // Hide all notifications
        });
        const randomIndex = Math.floor(Math.random() * notifications.length);
        notifications[randomIndex].classList.add('active'); // Show a random notification
    }

    // Function to show the Shikin notification
    function showShikinNotification() {
        const shikinNotification = document.getElementById('shikinNotification');
        shikinNotification.style.display = 'block'; // Show the notification
    }

    // Close button functionality
    document.getElementById('closeShikinNotification').addEventListener('click', function() {
        const confirmation1 = confirm("Are you sure you want to lose this unique hyper exclusive offer?");
        if (confirmation1) {
            const confirmation2 = confirm("You won't be able to have this offer again, are you sure?");
            if (confirmation2) {
                document.getElementById('shikinNotification').style.display = 'none'; // Hide the notification
            }
        }
    });

    // Function to show the Virus notification
    function showVirusNotification() {
        const virusNotification = document.getElementById('virusNotification');
        virusNotification.style.display = 'block'; // Show the notification
    }

    // Close button functionality for Virus notification
    document.getElementById('closeVirusNotification').addEventListener('click', function() {
        const confirmation1 = confirm("Are you sure you want to close this suspicious notification?");
        if (confirmation1) {
            const confirmation2 = confirm("You might miss an important alert, are you sure?");
            if (confirmation2) {
                document.getElementById('virusNotification').style.display = 'none'; // Hide the notification
            }
        }
    });

    // Click event for the virus notification
    document.getElementById('virusNotification').addEventListener('click', function() {
        // Freeze the screen for 3 seconds
        document.body.style.pointerEvents = 'none'; // Disable interactions
        document.body.style.opacity = '0.3'; // Low opacity effect
        setTimeout(() => {
            document.body.style.pointerEvents = 'auto'; // Re-enable interactions
            document.body.style.opacity = '1'; // Restore opacity
        }, 3000); // 3 seconds
    });

    // Accept Offer button functionality
    document.getElementById('acceptOfferButton').addEventListener('click', function() {
        // Close the virus notification
        document.getElementById('virusNotification').style.display = 'none'; // Hide the notification

        // Start generating GIFs every 2 minutes
        setInterval(generateRandomGif, 120000); // 120000 milliseconds = 2 minutes
    });

    // Function to generate a random GIF at a random position
    function generateRandomGif() {
        const gif = document.createElement('img');
        gif.src = 'https://media.giphy.com/media/3o7aD2sa1g0g0g0g0g/giphy.gif'; // Example GIF URL
        gif.style.position = 'fixed';
        gif.style.width = '100px'; // Set the size of the GIF
        gif.style.zIndex = '1002'; // Ensure it appears above other content

        // Random position
        gif.style.top = Math.random() * (window.innerHeight - 100) + 'px'; // Random Y position
        gif.style.left = Math.random() * (window.innerWidth - 100) + 'px'; // Random X position

        // Append the GIF to the body
        document.body.appendChild(gif);

        // Remove the GIF after 5 seconds
        setTimeout(() => {
            gif.remove();
        }, 5000); // 5000 milliseconds = 5 seconds
    }

    // Function to show the Meteorology notification
    function showMeteorologyNotification() {
        const meteorologyNotification = document.getElementById('meteorologyNotification');
        meteorologyNotification.style.display = 'block'; // Show the notification

        // Automatically close the notification after 7 seconds
        setTimeout(() => {
            meteorologyNotification.style.display = 'none'; // Hide the notification
        }, 7000); // 7000 milliseconds = 7 seconds
    }

    // Close button functionality for Meteorology notification
    document.getElementById('closeMeteorologyNotification').addEventListener('click', function() {
        document.getElementById('meteorologyNotification').style.display = 'none'; // Hide the notification
    });

    // Create notifications on page load
    createTopicNotifications();

    // Add event listener for button clicks
    document.getElementById('topicNotifications').addEventListener('click', handleButtonClick);

    // Show a random notification every minute (60000 milliseconds)
    setInterval(showRandomNotification, 60000);

    // Show the first random notification immediately for testing
    showRandomNotification();

    // Call this function to show the Shikin notification immediately
    showShikinNotification();

    // Call this function to show the Virus notification immediately
    showVirusNotification();

    // Call this function to show the Meteorology notification immediately
    showMeteorologyNotification();
});

