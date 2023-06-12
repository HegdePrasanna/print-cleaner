import os

def comment_print_statements(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.py'):
                file_path = os.path.join(root, file)
                comment_print_statements_in_file(file_path)

def comment_print_statements_in_file(file_path):
    with open(file_path, 'r+') as file:
        lines = file.readlines()
        file.seek(0)
        file.truncate()
        skip_next = False

        # for line in lines:
        for i in range(len(lines)):
            if line[i].strip().startswith('#required'):
                print(line)
                print('----------')
                skip_next = True
            elif line.strip().startswith('print(') and not skip_next:
                line = '#' + line

            skip_next = False
            print(line)
            file.write(line)

# Usage example
project_directory = 'F:\VSC_extension\ext_test'
comment_print_statements(project_directory)