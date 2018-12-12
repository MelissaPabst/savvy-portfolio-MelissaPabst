export default function Contact(){
    return `
    <form action="https://formspree.io/melissapabst@gmail.com" method="POST">
    <input type="text" name="firstname" placeholder="First Name" required>
    <input type="text" name="lastname" placeholder="Last Name" required>
    <input type="email" name="userEmail" placeholder="email@example.com" required>

    ​<br>
    <label>What's this message about?
        <br><input type="radio" name="subject" value="professional" checked><span>I'd like to hire you!</span>
        <br><input type="radio" name="subject" value="personal" checked><span>Personal message</span>
        <br><input type="radio" name="subject" value="other" checked><span>Don't know/something else</span>
    </label>
    ​
    <br>
    <label for="marketing">How did you hear about me?</label>
    <br>
    <select name="marketing">
        <optgroup label="Online">
            <option value="social">Social Media (FB, Twitter, LinkedIn)</option>
            <option value="github">Online Portfolio (GitHub)</option>
            <option value="search">Search Engine</option>
            <option value="email">Email</option>
        </optgroup>
        <optgroup label="In-Person">
            <option value="networking">We met at a networking event</option>
            <option value="referral">Personal referral</option>
            <option value="random">We met somewhere else</option>
        </optgroup>

        <option value="other">Other</option>
    </select>
    ​<br>
    <textarea name="user_message" rows="25" cols="150"></textarea>
    <br>
    <input type="checkbox" name="optin" value="trusting" checked> Subscribe me to your newsletter!
    <br>
    <input type="submit">
</form>
    `;
}