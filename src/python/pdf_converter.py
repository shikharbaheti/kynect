# Name, phone number, and email required
# other contact method (linkedin, github, social media) recommended but required
def header(header_map):
    latex = r'''
    \begin{center}
    \textbf{\Huge \scshape ''' + header_map.get('name') + r'''} \\ \vspace{1pt} %\scshape sets small capital letters, remove if desired
    \small $|$ '''+ header_map.get('phone_number') + r''' $|$ 
    \href{mailto:''' + header_map.get('email')+ r'''}{\underline{''' + header_map.get('email') +r'''}} $|$ 
    % Be sure to use a professional *personal* email address 
    ''' 
    for key in header_map.keys():
        if key != "name" and key != "phone_number" and key != "email" and key != "address":
            latex += "{"+ header_map.get(key) + "} $|$ "

    latex += "\n{"+ header_map.get('address') + "} \n"

    latex += "\end{center}"
    return latex

def education(education_list):
    #   education_list = [[degree achieved, years of study, institution of study, where it's located], [...], ...]
    #   \CVSubheading % Example
    #   {Degree Achieved | Major (Optional)}{Years of Study}
    #   {Institution of Study}{Where it is located}

    latex = r'''\section{Education} 
             \CVSubHeadingListStart'''
    for entry in education_list:
        latex += r'''
            \CVSubheading
            {{''' + entry[0] + '''}}{'''+ entry [1] + ''' } 
            {''' + entry[2] + ''' }{'''+ entry[3]+'''}'''

    latex += r'''\CVSubHeadingListEnd'''
    return latex

def work_experience(work_exp_list):
    latex = r'''\section{Work Experience} 
            \CVSubHeadingListStart'''
    #    \CVSubheading %Example
    #      {What you did}{When you worked there}
    #      {Who you worked for}{Where they are located}
    #      \CVItemListStart
    #        \CVItem{Why it is important to this employer}
    #      \CVItemListEnd
    for entry in work_exp_list:
        latex += r'''\CVSubheading 
            {'''+entry[0] +'}{'+entry[1]+r'''} 
            {'''+ entry[2]+'}{'+entry[3]+'''} 
            \CVItemListStart'''
        for i in range(3):
            latex += r'''\CVItem{'''+entry[i]+r'''}'''
        latex += '\CVItemListEnd \CVSubHeadingListEnd'

    return latex

def skills(skills_map):
    latex = r'''\section{Skills}
    \begin{itemize}[leftmargin=0.5cm, label={}]
    \small{\item{
    '''
    for key in skills_map.keys():
        latex += r'\textbf{'+key+'}{:' + skills_map.get(key) + r'} \\'

    latex += r'''}}
    \end{itemize}'''

    return latex


def build_latex():
    with open('resume.tex', 'w') as tex_file:
        tex_file.write(r'''\documentclass[A4,11pt]{article}
        %\documentclass[letterpaper,11pt]{article} %For use in US
        \usepackage{latexsym}
        \usepackage[empty]{fullpage}
        \usepackage{titlesec}
        \usepackage{marvosym}
        \usepackage[usenames,dvipsnames]{color}
        \usepackage{verbatim}
        \usepackage{enumitem}
        \usepackage[hidelinks]{hyperref}
        \usepackage[english]{babel}
        \usepackage{tabularx}
        \usepackage{tikz}
        \input{glyphtounicode}

        \begin{comment}
        I am by no means a professional when it comes to the CV's/resumes, I have
        received various trainings on how to write a CV and resume from my high 
        school, as well as the Austin College and University of Eastern Finland's
        career counseling departments. As I intend to share my CV as a template, I 
        feel that it is my responsibility to provide explanations of my work.
        \end{comment}


        %-----FONT OPTIONS-------------------------------------------------------------
        \begin{comment}
        The font of the document will impact not just how readable it is, but how it is
        perceived. In the "The Craft of Scientific Writing" by Michael Alley, shares a
        common fonts for publication as well as their use. I have chosen to use
        Palatino for its legibility, some others are given below. There is far too much
        about typography to discus here. Note: serif fonts have short projecting
        strokes, sans-serif fonts are sans (without) these strokes.
        \end{comment}


        % serif
        \usepackage{palatino}
        % \usepackage{times} %This is the default as well
        % \usepackage{charter}

        % sans-serif
        % \usepackage{helvet}
        % \usepackage[sfdefault]{noto-sans}
        % \usepackage[default]{sourcesanspro}

        %-----PAGE SETUP---------------------------------------------------------------

        % Adjust margins
        \addtolength{\oddsidemargin}{-1cm}
        \addtolength{\evensidemargin}{-1cm}
        \addtolength{\textwidth}{2cm}
        \addtolength{\topmargin}{-1cm}
        \addtolength{\textheight}{2cm}

        % Margins for US Letter size
        %\addtolength{\oddsidemargin}{-0.5in}
        %\addtolength{\evensidemargin}{-0.5in}
        %\addtolength{\textwidth}{1in}
        %\addtolength{\topmargin}{-.5in}
        %\addtolength{\textheight}{1.0in}

        \urlstyle{same}

        \raggedbottom
        \raggedright
        \setlength{\tabcolsep}{0cm}

        % Sections formatting
        \titleformat{\section}{
        \vspace{-4pt}\scshape\raggedright\large
        }{}{0em}{}[\color{black}\titlerule \vspace{-5pt}]

        % Ensure that .pdf is machine readable/ATS parsable
        \pdfgentounicode=1

        %-----CUSTOM COMMANDS FOR FORMATTING SECTIONS----------------------------------
        \newcommand{\CVItem}[1]{
        \item\small{
            {#1 \vspace{-2pt}}
        }
        }

        \newcommand{\CVSubheading}[4]{
        \vspace{-2pt}\item
            \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
            \textbf{#1} & #2 \\
            \small#3 & \small #4 \\
            \end{tabular*}\vspace{-7pt}
        }

        \newcommand{\CVSubSubheading}[2]{
            \item
            \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
            \text{\small#1} & \text{\small #2} \\
            \end{tabular*}\vspace{-7pt}
        }

        \newcommand{\CVSubItem}[1]{\CVItem{#1}\vspace{-4pt}}

        \renewcommand\labelitemii{$\vcenter{\hbox{\tiny$\bullet$}}$}

        \newcommand{\CVSubHeadingListStart}{\begin{itemize}[leftmargin=0.5cm, label={}]}
        % \newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0.15in, label={}]} % Uncomment for US
        \newcommand{\CVSubHeadingListEnd}{\end{itemize}}
        \newcommand{\CVItemListStart}{\begin{itemize}}
        \newcommand{\CVItemListEnd}{\end{itemize}\vspace{-5pt}}

        %------------------------------------------------------------------------------
        % CV STARTS HERE  %
        %------------------------------------------------------------------------------
        \begin{document}

        ''')
        tex_file.write(header({'name': 'Leah Tomotaki', 'phone_number':'214-471-9565', 'email':'leah.tomotaki@tamu.edu', 'linkedin': 'linkedin', 'address': '123 address st., College Station, TX, 77840'}))
        tex_file.write(education([['Bachelors of Science', '2018-2022', 'Texas AM University', 'College Station', 'Computer Science']]))
        tex_file.write(work_experience([['Job Title', 'Time-Time', 'Company', 'Location', 'Responsibility 1', 'Responsibility 2', 'Responsibility 3']]))
        tex_file.write(skills({'skill 1': 'details about skill 1', 'skill 2': 'details about skill 2'}))
        tex_file.write('\\end{document}')

    
def build_latex_text():
    latex = r'''\documentclass[A4,11pt]{article}
    %\documentclass[letterpaper,11pt]{article} %For use in US
    \usepackage{latexsym}
    \usepackage[empty]{fullpage}
    \usepackage{titlesec}
    \usepackage{marvosym}
    \usepackage[usenames,dvipsnames]{color}
    \usepackage{verbatim}
    \usepackage{enumitem}
    \usepackage[hidelinks]{hyperref}
    \usepackage[english]{babel}
    \usepackage{tabularx}
    \usepackage{tikz}
    \input{glyphtounicode}

    \begin{comment}
    I am by no means a professional when it comes to the CV's/resumes, I have
    received various trainings on how to write a CV and resume from my high 
    school, as well as the Austin College and University of Eastern Finland's
    career counseling departments. As I intend to share my CV as a template, I 
    feel that it is my responsibility to provide explanations of my work.
    \end{comment}


    %-----FONT OPTIONS-------------------------------------------------------------
    \begin{comment}
    The font of the document will impact not just how readable it is, but how it is
    perceived. In the "The Craft of Scientific Writing" by Michael Alley, shares a
    common fonts for publication as well as their use. I have chosen to use
    Palatino for its legibility, some others are given below. There is far too much
    about typography to discus here. Note: serif fonts have short projecting
    strokes, sans-serif fonts are sans (without) these strokes.
    \end{comment}


    % serif
    \usepackage{palatino}
    % \usepackage{times} %This is the default as well
    % \usepackage{charter}

    % sans-serif
    % \usepackage{helvet}
    % \usepackage[sfdefault]{noto-sans}
    % \usepackage[default]{sourcesanspro}

    %-----PAGE SETUP---------------------------------------------------------------

    % Adjust margins
    \addtolength{\oddsidemargin}{-1cm}
    \addtolength{\evensidemargin}{-1cm}
    \addtolength{\textwidth}{2cm}
    \addtolength{\topmargin}{-1cm}
    \addtolength{\textheight}{2cm}

    % Margins for US Letter size
    %\addtolength{\oddsidemargin}{-0.5in}
    %\addtolength{\evensidemargin}{-0.5in}
    %\addtolength{\textwidth}{1in}
    %\addtolength{\topmargin}{-.5in}
    %\addtolength{\textheight}{1.0in}

    \urlstyle{same}

    \raggedbottom
    \raggedright
    \setlength{\tabcolsep}{0cm}

    % Sections formatting
    \titleformat{\section}{
    \vspace{-4pt}\scshape\raggedright\large
    }{}{0em}{}[\color{black}\titlerule \vspace{-5pt}]

    % Ensure that .pdf is machine readable/ATS parsable
    \pdfgentounicode=1

    %-----CUSTOM COMMANDS FOR FORMATTING SECTIONS----------------------------------
    \newcommand{\CVItem}[1]{
    \item\small{
        {#1 \vspace{-2pt}}
    }
    }

    \newcommand{\CVSubheading}[4]{
    \vspace{-2pt}\item
        \begin{tabular*}{0.97\textwidth}[t]{l@{\extracolsep{\fill}}r}
        \textbf{#1} & #2 \\
        \small#3 & \small #4 \\
        \end{tabular*}\vspace{-7pt}
    }

    \newcommand{\CVSubSubheading}[2]{
        \item
        \begin{tabular*}{0.97\textwidth}{l@{\extracolsep{\fill}}r}
        \text{\small#1} & \text{\small #2} \\
        \end{tabular*}\vspace{-7pt}
    }

    \newcommand{\CVSubItem}[1]{\CVItem{#1}\vspace{-4pt}}

    \renewcommand\labelitemii{$\vcenter{\hbox{\tiny$\bullet$}}$}

    \newcommand{\CVSubHeadingListStart}{\begin{itemize}[leftmargin=0.5cm, label={}]}
    % \newcommand{\resumeSubHeadingListStart}{\begin{itemize}[leftmargin=0.15in, label={}]} % Uncomment for US
    \newcommand{\CVSubHeadingListEnd}{\end{itemize}}
    \newcommand{\CVItemListStart}{\begin{itemize}}
    \newcommand{\CVItemListEnd}{\end{itemize}\vspace{-5pt}}

    %------------------------------------------------------------------------------
    % CV STARTS HERE  %
    %------------------------------------------------------------------------------
    \begin{document}

    '''
    latex += header({'name': 'Leah Tomotaki', 'phone_number':'214-471-9565', 'email':'leah.tomotaki@tamu.edu', 'linkedin': 'linkedin', 'address':'123 address st., College Station, TX 77840'})
    latex += education([['Bachelors of Science', '2018-2022', 'Texas AM University', 'College Station', 'Computer Science']])
    latex += work_experience([['Job Title', 'Time-Time', 'Company', 'Location', 'Responsibility 1', 'Responsibility 2', 'Responsibility 3']])
    latex += skills({'skill 1': 'details about skill 1', 'skill 2': 'details about skill 2'})
    latex += '\\end{document}'
    return latex

from latex import build_pdf
from pdflatex import PDFLaTeX
import subprocess
import os

def convert_to_pdf():    
    # pdfl = PDFLaTeX.from_texfile('resume.tex')
    # pdf, log, completed_process = pdfl.create_pdf(keep_pdf_file=True, keep_log_file=True)

    proc=subprocess.Popen(['pdflatex','resume.tex'])
    proc.communicate()
    os.startfile('resume.pdf')
    #os.unlink('%s.tex'%name)
    os.unlink('resume.log')
    os.unlink('resume.aux')

    
    # pdf = build_pdf('resume.tex')
    # pdf.save_to('resume.pdf')


build_latex()
convert_to_pdf()
