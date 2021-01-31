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
    #   {Institution of Study}{GPA}{City}{State}

    latex = r'''\section{Education} 
             \CVSubHeadingListStart'''
    for entry in education_list:
        latex += r'''
            \CVSubheading
            {{''' + entry.get('degree') +r'''}}{'''+ entry.get('dates') + ''' }
            {''' + entry.get('institution') + ''' $|$ GPA: ''' +entry.get('gpa')+'''}{'''+ entry.get('city')+','+entry.get('state')+'''}'''

    latex += r'''\CVSubHeadingListEnd'''
    return latex

def work_experience(work_exp_list):
    latex = r'''\section{Work Experience} 
            \CVSubHeadingListStart'''
    
    for entry in work_exp_list:
        latex += r'''\CVSubheading 
            {'''+entry.get('title') +'}{'+entry.get('dates')+r'''} 
            {'''+ entry.get('company')+'}{'+entry.get('location')+r'''} 
            \CVItemListStart'''
        for responsibility in entry.get('responsibilities').split(','):
            latex += r'''\CVItem{'''+responsibility+r'''}'''
        latex += r'\CVItemListEnd'

    latex += r'\CVSubHeadingListEnd'

    return latex

def skills(skills):
    latex = r'''\section{Skills}
    \begin{itemize}[leftmargin=0.5cm, label={}]
    \small{\item{
    '''
    for skill in skills:
        latex += r'{' + skill + r'} \\'

    latex += r'''}}
    \end{itemize}'''

    return latex


def build_latex(header_map, education_list, work_exp_list, skills_list):
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
        tex_file.write(header(header_map))
        tex_file.write(education(education_list))
        tex_file.write(work_experience(work_exp_list))
        tex_file.write(skills(skills_list))
        tex_file.write('\\end{document}')

def parse_data(data):
    header_map = {}
    education_list = [{}]
    job_list = [{}, {}, {}]
    skills_list = []
    for key in data:
        if key in ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'zipcode']:
            header_map[key] = data[key]
        if key in ['institution', 'degree', 'gpa', 'edu_start_month', 'edu_start_year', 'edu_end_month', 'edu_end_year', 'eduCity', 'eduState']:
            education_list[0][key] = data[key]
        if key in ['company1', 'position1', 'city1', 'jobDesc1', 'company2', 'position2', 'city2', 'jobDesc2', 'company3', 'position3', 'city3', 'jobDesc3']
            if key contains "1":
                job_list[0][key] = data[key]
            if key contains "2":
                job_list[1][key] = data[key]
            if key contains "3":
                job_list[2][key] = data[key]
        if key == "skills":
            skills_list = data[key].split(',') 

    build_latex(header_map, education_list, job_list, skills_list)

from latex import build_pdf
from pdflatex import PDFLaTeX
import subprocess
import os
import sys

def convert_to_pdf(data):    
    parse_data(data)

    proc=subprocess.Popen(['pdflatex','resume.tex'])
    proc.communicate()
    os.startfile('resume.pdf')
    #os.unlink('%s.tex'%name)
    os.unlink('resume.log')
    os.unlink('resume.aux')

convert_to_pdf(sys.argv[1])