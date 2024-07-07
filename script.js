document.addEventListener('DOMContentLoaded', function() {
    let bookmark = document.getElementsByClassName('bookmark');
    Array.from(bookmark).forEach(v => v.addEventListener('click', function () {
        let el = this.parentElement.getElementsByClassName('bookmark')[0];
        if (el.classList.contains("fa-heart-o")) {
            el.classList.remove("fa-heart-o");
            el.classList.add("fa-heart");
            el.innerText = "Job saved";
        } else {
            el.classList.remove("fa-heart");
            el.classList.add("fa-heart-o");
            el.innerText = "Save Job";
        }
    }));

    document.querySelectorAll('.apply-btn').forEach(button => {
        button.addEventListener('click', function() {
            const jobDetails = this.closest('.company-details');
            const jobTitle = jobDetails.querySelector('h4 strong').textContent;
            const experienceRequired = jobDetails.dataset.experience.split('-');
            const skillsRequired = jobDetails.dataset.skills.split(',');

            document.getElementById('form-title').textContent = `Apply for ${jobTitle}`;
            document.getElementById('apply-form').onsubmit = function(event) {
                event.preventDefault();
                
                const experience = parseInt(document.getElementById('experience').value);
                const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim().toLowerCase());
                const resume = document.getElementById('resume').files[0];

                if (isNaN(experience) || experience < parseInt(experienceRequired[0]) || experience > parseInt(experienceRequired[1])) {
                    alert('You do not meet the experience requirement.');
                    return;
                }

                let skillsCheck = skillsRequired.every(skill => skills.includes(skill.toLowerCase()));
                if (!skillsCheck) {
                    alert('You do not meet the skills requirement.');
                    return;
                }

                if (!resume) {
                    alert('Please upload your resume.');
                    return;
                }

                alert('Application submitted successfully!');
                document.getElementById('application-form').style.display = 'none';
            };

            document.getElementById('application-form').style.display = 'block';
        });
    });

    document.querySelector('.close-btn').onclick = function() {
        document.getElementById('application-form').style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == document.getElementById('application-form')) {
            document.getElementById('application-form').style.display = 'none';
        }
    };
});
