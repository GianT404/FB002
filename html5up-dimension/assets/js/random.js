// Danh sách các việc làm khi chán chường và liên kết tương ứng (nếu có)
const activities = [
    { text: "listen to music", link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D" },
    { text: "take a walk outside. Who doesn't like to go out?" },
    { text: "read a book" },
    { text: "block crush messages for 1 day ¯\_(ツ)_/¯"},
    { text: "Try a new recipe" },
    { text: "Watch a movie" },
    { text: "Learn something new" },
    { text: "Write in a journal" },
    { text: "Call a friend" },
    { text: "Do some exercise" },
    { text: "Play a game" },
    { text: "Practice a hobby" },
    { text: "Meditate" },
    { text: "Visit a museum" },
    { text: "Explore nature" },
    { text: "Volunteer" },
    { text: "Start a DIY project" },
    { text: "Take a nap" },
    { text: "Go for a bike ride" },
    { text: "Visit a local market" },
    { text: "Try a new restaurant" },
    { text: "Organize your space" },
    { text: "Draw or paint" },
    { text: "Take photos" },
    { text: "Visit a park" },
    { text: "Go stargazing" },
    { text: "Plan a future trip" },
    { text: "Reflect on your goals" },
    { text: "Do a puzzle" },
    { text: "Dance" },
    { text: "Listen to a podcast" },
    { text: "Create a bucket list" },
    { text: "Write a letter" },
    { text: "Play a musical instrument" },
    { text: "Do some gardening" },
    { text: "Visit a library" },
    { text: "Attend a workshop" },
    { text: "Make a gratitude list" }
];

// Function to pick a random activity
function getRandomActivity() {
    const randomIndex = Math.floor(Math.random() * activities.length);
    return activities[randomIndex];
}

// Function to display random activity when button is clicked
document.getElementById('randomButton').addEventListener('click', function() {
    const randomActivity = getRandomActivity();
    const activityText = "Why not " + randomActivity.text + "?";
    let activityHTML = activityText;

    // Nếu có liên kết, thêm vào chuỗi HTML
    if (randomActivity.link) {
        activityHTML += "<br><a href='" + randomActivity.link + "' target='_blank'>?</a>";
    }

    document.getElementById('randomActivity').innerHTML = activityHTML;
});
