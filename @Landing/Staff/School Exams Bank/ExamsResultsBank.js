const Titles = [
    {
        Group: 'GRADE 2 END - TERM I PERFORMANCE REPORTS',
        year: 2023,
        students: [
            {
                TemplateUsed: 'https://1drv.ms/w/s!ApO7CeXy3fBY9zIRxLnZzbaAPvky',
                scoresUrl: 'https://docs.google.com/spreadsheets/d/1Zyzdx6LSONzpuGmDd4c-Vv3fK6u1tJfs/edit?usp=sharing&ouid=110287645281482421505&rtpof=true&sd=true',
                ReportspdfUrl: './Docs/Grade 2 End Term II Reports 2024.pdf',
                Date: 'Friday 5th, April 2023',
                imageUrl: './images/newlogo.png',
            },
            // Add more student objects as needed
        ]
    },

    {
        Group: 'GRADE 3 END - TERM I PERFORMANCE REPORTS',
        year: 2023,
        students: [
            {
                scoresUrl: 'https://docs.google.com/spreadsheets/d/1ZxSdk5PyVC8oXdlDWLK7x16g-GSdXw-L/edit?usp=sharing&ouid=110287645281482421505&rtpof=true&sd=true',
                ReportspdfUrl: './Docs/Grade 3 End Term II Reports 2024.pdf',
                TemplateUsed: 'https://1drv.ms/w/s!ApO7CeXy3fBY9zIRxLnZzbaAPvky',
                Date: 'Friday 5th, April 2023',
                imageUrl: './images/newlogo.png',
            },
            // Add more student objects as needed
        ]
    },


    {
        Group: 'GRADE 4 END - TERM I PERFORMANCE REPORTS',
        year: 2023,
        students: [
            {
                scoresUrl: 'https://docs.google.com/spreadsheets/d/1ZykvaCsPp4EDO-YhtpDh0yg4aFh2Zn3N/edit?usp=sharing&ouid=110287645281482421505&rtpof=true&sd=true',
                ReportspdfUrl: './Docs/Grade 4 End Term II Reports 2024.pdf',
                TemplateUsed: 'https://1drv.ms/w/s!ApO7CeXy3fBY9zIRxLnZzbaAPvky',
                Date: 'Friday 5th, April 2023',
                imageUrl: './images/newlogo.png',
            },
            // Add more student objects as needed
        ]
    },

    {
        Group: 'GRADE 5 END - TERM I PERFORMANCE REPORTS',
        year: 2023,
        students: [
            {
                scoresUrl: 'https://docs.google.com/spreadsheets/d/1ZyO4IxwgFjq0FRPZrFpwD40puoIDm9U-/edit?usp=sharing&ouid=110287645281482421505&rtpof=true&sd=true',
                ReportspdfUrl: './Docs/Grade 5 End Term II Reports 2024.pdf',
                TemplateUsed: 'https://1drv.ms/w/s!ApO7CeXy3fBY9zIRxLnZzbaAPvky',
                Date: 'Friday 5th, April 2023',
                imageUrl: './images/newlogo.png',
            },
            // Add more student objects as needed
        ]
    },
    {
        Group: 'GRADE 6 END - TERM I PERFORMANCE REPORTS',
        year: 2023,
        students: [
            {
                scoresUrl: 'https://docs.google.com/spreadsheets/d/1Zyckj3jWQ4FDlffSqthTpVyPXDe7qkHj/edit?usp=sharing&ouid=110287645281482421505&rtpof=true&sd=true',
                ReportspdfUrl: './Docs/Grade 6 End Term II Reports 2024.pdf',
                TemplateUsed: 'https://1drv.ms/w/s!ApO7CeXy3fBY9zIRxLnZzbaAPvky',
                Date: 'Friday 5th, April 2023',
                imageUrl: './images/newlogo.png',
            },
            // Add more student objects as needed
        ]
    },
   
];

// Function to search and display students based on Title
function searchStudents() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const searchInput2 = document.getElementById('searchInput2').value.toLowerCase();
    const documentList = document.getElementById('documentList');
    documentList.innerHTML = ''; // Clear previous search results

    let foundStudents = false;

    Titles.forEach((Title) => {
        Title.students.forEach((student) => {
            if (
                (Title.Group.toLowerCase().includes(searchInput) || Title.year.toString().includes(searchInput)) &&
                (Title.Group.toLowerCase().includes(searchInput2) || Title.year.toString().includes(searchInput2))
            ) {
                const studentCard = document.createElement('div');
                studentCard.classList.add('document-card');

                const studentTitle = document.createElement('p');
                studentTitle.textContent = Title.Group;
                highlightText(studentTitle, searchInput);
                highlightText(studentTitle, searchInput2);

                const studentDate = document.createElement('h3');
                studentDate.textContent = 'Dated: ' + student.Date;
                highlightText(studentDate, searchInput);
                highlightText(studentDate, searchInput2);

                const studentDownloadBtn = document.createElement('button');
                studentDownloadBtn.textContent = 'Download PDF';
                studentDownloadBtn.addEventListener('click', () => {
                    Swal.fire({
                        title: 'Choose Action',
                        text: 'Do you want to download Class Scores or open Performance Reports?',
                        showCancelButton: true,
                        confirmButtonText: 'Scores',
                        cancelButtonText: 'Template Used',
                        cancelButtonColor: '#3085d6',
                        showDenyButton: true,
                        denyButtonText: 'Reports'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            openPDF(student.scoresUrl); // Open scoresUrl in a new tab
                        } else if (result.isDenied) {
                            openPDF(student.ReportspdfUrl);
                        } else if (result.dismiss === Swal.DismissReason.cancel) {
                            // Open template URL if Cancel button is clicked
                            window.open(student.TemplateUsed, '_blank');
                        }
                    });
                });
                
                const studentImage = document.createElement('img');
                studentImage.src = student.imageUrl;
                studentImage.alt = student.Date + ' Image';
                studentCard.appendChild(studentImage);

                studentCard.appendChild(studentTitle);
                studentCard.appendChild(studentDate);
                studentCard.appendChild(studentDownloadBtn);
                documentList.appendChild(studentCard);

                foundStudents = true;
            }
        });
    });

    if (!foundStudents) {
        Swal.fire({
            icon: 'error',
            title: 'No Student Found',
            text: 'Please try a different search term.',
            confirmButtonText: 'OK'
        }).then(() => {
            // Reload the page if no student is found
            location.reload();
        });
    }
}

// Function to open PDF in a new tab
function openPDF(url) {
    window.open(url, '_blank');
}

// Function to download PDF with the specified name
function downloadPDF(url, fileName) {
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName; // Use the specified file name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Function to highlight text within a given element
function highlightText(element, searchText) {
    const innerHTML = element.innerHTML;
    const index = innerHTML.toLowerCase().indexOf(searchText.toLowerCase());
    if (index >= 0) {
        const highlightedText = innerHTML.substring(0, index) +
            '<span class="highlight">' + innerHTML.substring(index, index + searchText.length) + '</span>' +
            innerHTML.substring(index + searchText.length);
        element.innerHTML = highlightedText;
    }
}

// Call searchStudents function when the page loads and on input change
window.onload = searchStudents;
document.getElementById('searchInput').addEventListener('input', searchStudents);
document.getElementById('searchInput2').addEventListener('input', searchStudents);
