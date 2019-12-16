# import sys
#
# data = "this began life in python"
# print(data)
# sys.stdout.flush()
#
import sys

def main(argv):
    print(argv)
    sys.stdout.flush()

if __name__ == "__main__":
    main(sys.argv[1])
